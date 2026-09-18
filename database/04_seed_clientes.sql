-- =============================================================================
-- Dharma Sales System
-- Archivo: 04_seed_clientes.sql
-- Descripción: Script de carga inicial de clientes de prueba.
-- =============================================================================

INSERT INTO clientes (tipo_documento, numero_documento, razon_social, nombre_contacto, telefono, email, direccion, ciudad, tipo_cliente, is_active)
VALUES
    ('RUC', '20123456789', 'COMERCIAL XYZ SAC', 'Juan Pérez', '987 654 321', 'jperez@xyz.com', 'Av. Argentina 1420, Cercado de Lima', 'Lima', 'Empresa', TRUE),
    ('DNI', '10457891234', 'María Torres', 'María Torres', '912 345 678', 'maria@gmail.com', 'Jr. Las Flores 341, Miraflores', 'Lima', 'Persona', TRUE),
    ('RUC', '20567890123', 'LIMPIEZA TOTAL SAC', 'Luis García', '998 765 432', 'lgarcia@limpiezatotal.pe', 'Av. Elmer Faucett 560, Callao', 'Callao', 'Empresa', TRUE),
    ('RUC', '20678901234', 'HOSPITAL SAN JOSÉ', 'Ana Ruiz', '987 321 654', 'aruiz@hsj.pe', 'Av. Prolongación Javier Prado 1020, Ate', 'Lima', 'Empresa', TRUE),
    ('RUC', '10345678901', 'Distribuidora Andina', 'Carlos Silva', '999 111 222', 'csilva@andina.com', 'Calle Los Jazmines 230, Trujillo', 'Trujillo', 'Empresa', FALSE),
    ('RUC', '20543210987', 'HOTEL SOL DE LIMA', 'Laura Méndez', '966 333 444', 'lmendez@hotelsol.pe', 'Av. Pardo 850, Miraflores', 'Lima', 'Empresa', TRUE),
    ('DNI', '10432109876', 'Pedro Rojas', 'Pedro Rojas', '912 777 888', 'projas@gmail.com', 'Av. Salaverry 1240, Jesús María', 'Lima', 'Persona', TRUE),
    ('RUC', '20654321098', 'CLÍNICA SU SALUD SAC', 'Elena Vargas', '998 555 123', 'evargas@clinicasalud.pe', 'Av. Arequipa 2450, San Isidro', 'Lima', 'Empresa', TRUE),
    ('RUC', '20556778899', 'Supermercados Ahorro', 'Miguel Santos', '987 888 999', 'msantos@ahorro.com', 'Av. Colonial 3200, Bellavista', 'Callao', 'Empresa', TRUE),
    ('DNI', '10498765432', 'Carla Vílchez', 'Carla Vílchez', '945 666 777', 'cvilchez@gmail.com', 'Jr. Junín 540, Cercado de Lima', 'Lima', 'Persona', TRUE),
    ('RUC', '20456123789', 'Inversiones R&V SAC', 'Roberto Vega', '955 444 333', 'rvega@inversionesrv.pe', 'Av. Javier Prado Este 4500, Surco', 'Lima', 'Empresa', FALSE),
    ('RUC', '20789456123', 'Textiles del Sur EIRL', 'Rosa Mendoza', '977 123 456', 'rmendoza@textilessur.com', 'Av. Ejército 710, Yanahuara', 'Arequipa', 'Empresa', TRUE)
ON CONFLICT (numero_documento) DO NOTHING;
