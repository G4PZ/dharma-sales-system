-- =============================================================================
-- Dharma Sales System
-- Archivo: 03_create_clientes.sql
-- Descripción: Script DDL de creación de la tabla clientes e índices asociados.
-- =============================================================================

CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    tipo_documento VARCHAR(20) NOT NULL DEFAULT 'RUC',
    numero_documento VARCHAR(20) UNIQUE NOT NULL,
    razon_social VARCHAR(255) NOT NULL,
    nombre_contacto VARCHAR(150),
    telefono VARCHAR(50),
    email VARCHAR(150),
    direccion VARCHAR(255),
    ciudad VARCHAR(100) NOT NULL DEFAULT 'Trujillo',
    tipo_cliente VARCHAR(50) NOT NULL DEFAULT 'Empresa',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Índices para optimizar búsquedas y filtrados frecuentes
CREATE INDEX IF NOT EXISTS idx_clientes_numero_documento ON clientes(numero_documento);
CREATE INDEX IF NOT EXISTS idx_clientes_razon_social ON clientes(razon_social);
CREATE INDEX IF NOT EXISTS idx_clientes_email ON clientes(email);
CREATE INDEX IF NOT EXISTS idx_clientes_is_active ON clientes(is_active);
CREATE INDEX IF NOT EXISTS idx_clientes_tipo_cliente ON clientes(tipo_cliente);
