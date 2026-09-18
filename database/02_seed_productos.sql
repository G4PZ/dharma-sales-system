-- =============================================================================
-- Dharma Sales System
-- Archivo: 02_seed_productos.sql
-- Descripción: Datos iniciales de prueba basados en el catálogo de Dharma E.I.R.L.
-- =============================================================================

INSERT INTO productos (codigo, nombre, descripcion, categoria, precio, stock, stock_minimo, unidad_medida, is_active)
VALUES
    ('P001-0001', 'Papel Higiénico Elite', 'Doble hoja x 40 m', 'Papel y Celulosa', 12.50, 250, 30, 'rollo', TRUE),
    ('P001-0002', 'Jabón Líquido Antibacterial', 'Galón x 3.8 L', 'Limpieza y Desinfección', 28.90, 24, 30, 'galón', TRUE),
    ('P001-0003', 'Lejía Clorox Original', 'Galón x 4 L', 'Limpieza y Desinfección', 15.00, 120, 20, 'galón', TRUE),
    ('P001-0004', 'Guantes de Nitrilo', 'Caja x 100 und.', 'Seguridad e Higiene', 36.00, 8, 20, 'caja', TRUE),
    ('P001-0005', 'Bolsa para Residuos 100L', 'Paquete x 10 und.', 'Bolsas y Embalajes', 18.50, 200, 25, 'paquete', TRUE),
    ('P001-0006', 'Toalla de Papel Absorbente', 'Rollo x 120 m', 'Papel y Celulosa', 22.00, 15, 30, 'rollo', TRUE),
    ('P001-0007', 'Desinfectante Multiusos', 'Galón x 3.8 L', 'Limpieza y Desinfección', 26.90, 0, 20, 'galón', FALSE),
    ('P001-0008', 'Pañuelos Faciales', 'Caja x 100 und.', 'Papel y Celulosa', 6.50, 310, 40, 'caja', TRUE),
    ('P001-0009', 'Trapeador Industrial', 'Und.', 'Utensilios de Limpieza', 24.00, 42, 15, 'und', TRUE),
    ('P001-0010', 'Dispensador de Papel', 'ABS Blanco', 'Equipamiento', 89.00, 6, 15, 'und', TRUE)
ON CONFLICT (codigo) DO NOTHING;
