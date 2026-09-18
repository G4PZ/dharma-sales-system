from fastapi import FastAPI
from sqlalchemy import text

from app.database import engine

app = FastAPI(
    title="Dharma Sales API",
    version="0.1.0"
)


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