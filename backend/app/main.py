from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.database import Base, engine
import app.models  # noqa: F401 - Asegura registro de modelos en SQLAlchemy Base
from app.routes.clientes import router as clientes_router
from app.routes.productos import router as productos_router

# Creación automática de tablas mediante SQLAlchemy en desarrollo
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Dharma Sales API",
    version="0.1.0",
    description="API para la gestión de ventas e inventario de Dharma E.I.R.L."
)

# Configuración de CORS para permitir comunicación con el Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registro de routers
app.include_router(clientes_router, prefix="/api/clientes", tags=["Clientes"])
app.include_router(productos_router, prefix="/api/productos", tags=["Productos"])



@app.get("/")
def root():
    return {
        "message": "Dharma Sales API funcionando correctamente"
    }


@app.get("/database-test")
def database_test():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))

        return {
            "database": "PostgreSQL conectado correctamente",
            "result": result.scalar()
        }