-- =============================================================================
-- Dharma Sales System
-- Archivo: 04_seed_clientes.sql
-- Descripción: Script de carga inicial de clientes de prueba.
-- =============================================================================

INSERT INTO clientes (tipo_documento, numero_documento, razon_social, nombre_contacto, telefono, email, direccion, ciudad, tipo_cliente, is_active)
VALUES
    ('RUC', '20123456789', 'AGROINDUSTRIAL LA LIBERTAD S.A.C.', 'Ing. Juan Pérez', '944 654 321', 'ventas@agrolalibertad.pe', 'Av. América Sur 1420, La Perla', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20457891234', 'DISTRIBUIDORA NORTEÑA S.R.L.', 'Lic. María Torres', '949 345 678', 'contacto@distribuidoranortena.pe', 'Jr. Pizarro 341, Centro Histórico', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20567890123', 'LIMPIEZA TOTAL DEL NORTE S.A.C.', 'Luis García', '948 765 432', 'lgarcia@limpiezanorte.pe', 'Av. Mansiche 560, Urb. Natasha Alta', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20678901234', 'CLÍNICA SAN JOSÉ DE TRUJILLO S.A.', 'Dra. Ana Ruiz', '947 321 654', 'administracion@clinicasanjose.pe', 'Av. Mansiche 1020, Urb. Santa Inés', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20345678901', 'DISTRIBUIDORA ANDINA DEL PERÚ S.A.C.', 'Carlos Silva', '949 111 222', 'csilva@andinatrujillo.pe', 'Calle Los Jazmines 230, California', 'Trujillo', 'Empresa', FALSE),
    ('RUC', '20543210987', 'HOTELERÍA COLONIAL TRUJILLO S.A.C.', 'Laura Méndez', '946 333 444', 'reservas@hotelcolonialtrujillo.pe', 'Av. Larco 850, La Merced', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20432109876', 'CONSTRUCTORA CHAN CHAN S.A.C.', 'Ing. Pedro Rojas', '942 777 888', 'projas@constructorachanchan.pe', 'Av. España 1240, Centro Cívico', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20654321098', 'SERVICIOS INDUSTRIALES DEL NORTE S.A.C.', 'Elena Vargas', '948 555 123', 'evargas@serviciosnorte.pe', 'Av. Teodoro Valcárcel 450, Urb. Primavera', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20556778899', 'SUPERMERCADOS EL SOL S.A.C.', 'Miguel Santos', '947 888 999', 'msantos@supermercadossol.pe', 'Av. Jesús de Nazareth 320, Urb. San Andrés', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20498765432', 'FARMA SALUD LA LIBERTAD S.A.C.', 'Q.F. Carla Vílchez', '945 666 777', 'cvilchez@farmasalud.pe', 'Av. América Norte 540, Los Jardines', 'Trujillo', 'Empresa', TRUE),
    ('RUC', '20456123789', 'INVERSIONES R&V TRUJILLO S.A.C.', 'Roberto Vega', '945 444 333', 'rvega@inversionesrv.pe', 'Av. Húsares de Junín 820, La Merced', 'Trujillo', 'Empresa', FALSE),
    ('RUC', '20789456123', 'TEXTILES DE LA LIBERTAD E.I.R.L.', 'Rosa Mendoza', '947 123 456', 'rmendoza@textileslibertad.pe', 'Av. Túpac Amaru 710, Alto Mochica', 'Trujillo', 'Empresa', TRUE)
ON CONFLICT (numero_documento) DO NOTHING;
