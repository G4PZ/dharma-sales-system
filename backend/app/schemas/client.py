from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field


class ClientBase(BaseModel):
    tipo_documento: str = Field("RUC", max_length=20, description="Tipo de documento: RUC, DNI, CE")
    numero_documento: str = Field(..., min_length=8, max_length=20, description="Número de RUC o DNI")
    razon_social: str = Field(..., min_length=1, max_length=255, description="Nombre o Razón Social")
    nombre_contacto: Optional[str] = Field(None, max_length=150, description="Persona de contacto")
    telefono: Optional[str] = Field(None, max_length=50, description="Teléfono de contacto")
    email: Optional[str] = Field(None, max_length=150, description="Correo electrónico")
    direccion: Optional[str] = Field(None, max_length=255, description="Dirección fiscal o de entrega")
    ciudad: Optional[str] = Field("Lima", max_length=100, description="Ciudad o departamento")
    tipo_cliente: str = Field("Empresa", max_length=50, description="Tipo de cliente: Empresa o Persona")
    is_active: bool = Field(True, description="Estado activo / inactivo")


class ClientCreate(ClientBase):
    pass


class ClientUpdate(BaseModel):
    tipo_documento: Optional[str] = Field(None, max_length=20)
    numero_documento: Optional[str] = Field(None, min_length=8, max_length=20)
    razon_social: Optional[str] = Field(None, min_length=1, max_length=255)
    nombre_contacto: Optional[str] = Field(None, max_length=150)
    telefono: Optional[str] = Field(None, max_length=50)
    email: Optional[str] = Field(None, max_length=150)
    direccion: Optional[str] = Field(None, max_length=255)
    ciudad: Optional[str] = Field(None, max_length=100)
    tipo_cliente: Optional[str] = Field(None, max_length=50)
    is_active: Optional[bool] = None


class ClientResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    tipo_documento: str
    numero_documento: str
    razon_social: str
    nombre_contacto: Optional[str] = None
    telefono: Optional[str] = None
    email: Optional[str] = None
    direccion: Optional[str] = None
    ciudad: Optional[str] = None
    tipo_cliente: str
    is_active: bool
    created_at: datetime
    updated_at: datetime


class ClientListResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    items: List[ClientResponse]
    total: int
    skip: int
    limit: int


class ClientStatsResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    clientes_activos: int
    nuevos_este_mes: int
    empresas_count: int
    clientes_inactivos: int
    ultimos_clientes: List[ClientResponse]
