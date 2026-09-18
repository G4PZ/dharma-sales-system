from datetime import datetime, timezone
from typing import Optional
from fastapi import HTTPException, status
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.models.client import Cliente
from app.schemas.client import ClientCreate, ClientUpdate


def get_clients(
    db: Session,
    search: Optional[str] = None,
    tipo_cliente: Optional[str] = None,
    estado: Optional[str] = None,
    ciudad: Optional[str] = None,
    skip: int = 0,
    limit: int = 50,
) -> dict:
    query = db.query(Cliente)

    # Filtro de búsqueda textual por documento, razón social, contacto o correo
    if search and search.strip():
        term = f"%{search.strip()}%"
        query = query.filter(
            or_(
                Cliente.numero_documento.ilike(term),
                Cliente.razon_social.ilike(term),
                Cliente.nombre_contacto.ilike(term),
                Cliente.email.ilike(term),
            )
        )

    # Filtro por tipo de cliente (Empresa / Persona)
    if tipo_cliente and tipo_cliente.strip().lower() not in ("todos", "todas", ""):
        query = query.filter(Cliente.tipo_cliente.ilike(tipo_cliente.strip()))

    # Filtro por estado activo / inactivo
    if estado:
        est = estado.strip().lower()
        if est in ("activo", "activos", "true"):
            query = query.filter(Cliente.is_active.is_(True))
        elif est in ("inactivo", "inactivos", "false"):
            query = query.filter(Cliente.is_active.is_(False))

    # Filtro por ciudad
    if ciudad and ciudad.strip().lower() not in ("todas", "todos", ""):
        query = query.filter(Cliente.ciudad.ilike(ciudad.strip()))

    total = query.count()
    items = query.order_by(Cliente.id.asc()).offset(skip).limit(limit).all()

    return {
        "items": items,
        "total": total,
        "skip": skip,
        "limit": limit,
    }


def get_client_by_id(db: Session, client_id: int) -> Optional[Cliente]:
    return db.query(Cliente).filter(Cliente.id == client_id).first()


def get_client_by_document(db: Session, numero_documento: str) -> Optional[Cliente]:
    return db.query(Cliente).filter(
        Cliente.numero_documento.ilike(numero_documento.strip())
    ).first()


def create_client(db: Session, client_in: ClientCreate) -> Cliente:
    existing = get_client_by_document(db, client_in.numero_documento)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Ya existe un cliente registrado con el número de documento '{client_in.numero_documento}'."
        )

    client_data = client_in.model_dump()
    client = Cliente(**client_data)
    db.add(client)
    db.commit()
    db.refresh(client)
    return client


def update_client(db: Session, db_client: Cliente, client_in: ClientUpdate) -> Cliente:
    update_data = client_in.model_dump(exclude_unset=True)

    if "numero_documento" in update_data and update_data["numero_documento"] != db_client.numero_documento:
        existing = get_client_by_document(db, update_data["numero_documento"])
        if existing and existing.id != db_client.id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"El documento '{update_data['numero_documento']}' ya está en uso por otro cliente."
            )

    for field, value in update_data.items():
        setattr(db_client, field, value)

    db.commit()
    db.refresh(db_client)
    return db_client


def toggle_client_status(db: Session, db_client: Cliente) -> Cliente:
    db_client.is_active = not db_client.is_active
    db.commit()
    db.refresh(db_client)
    return db_client


def get_client_stats(db: Session) -> dict:
    now = datetime.now(timezone.utc)
    start_of_month = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

    # 1. Clientes activos
    clientes_activos = db.query(Cliente).filter(Cliente.is_active.is_(True)).count()

    # 2. Nuevos este mes
    nuevos_este_mes = db.query(Cliente).filter(Cliente.created_at >= start_of_month).count()

    # 3. Empresas registradas
    empresas_count = db.query(Cliente).filter(Cliente.tipo_cliente.ilike("Empresa")).count()

    # 4. Clientes inactivos
    clientes_inactivos = db.query(Cliente).filter(Cliente.is_active.is_(False)).count()

    # Últimos clientes registrados para widgets derivados de clientes reales
    ultimos_clientes = (
        db.query(Cliente)
        .order_by(Cliente.created_at.desc(), Cliente.id.desc())
        .limit(5)
        .all()
    )

    return {
        "clientes_activos": clientes_activos,
        "nuevos_este_mes": nuevos_este_mes,
        "empresas_count": empresas_count,
        "clientes_inactivos": clientes_inactivos,
        "ultimos_clientes": ultimos_clientes,
    }
