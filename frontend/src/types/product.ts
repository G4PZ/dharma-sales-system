export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string | null;
  categoria: string;
  precio: number | string;
  stock: number;
  stock_minimo: number;
  unidad_medida: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductoCreate {
  codigo: string;
  nombre: string;
  descripcion?: string | null;
  categoria: string;
  precio: number;
  stock: number;
  stock_minimo: number;
  unidad_medida: string;
  is_active?: boolean;
}

export interface ProductoUpdate {
  codigo?: string;
  nombre?: string;
  descripcion?: string | null;
  categoria?: string;
  precio?: number;
  stock?: number;
  stock_minimo?: number;
  unidad_medida?: string;
  is_active?: boolean;
}

export interface ProductListResponse {
  items: Producto[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductAlertItem {
  id: number;
  codigo: string;
  nombre: string;
  categoria: string;
  stock: number;
  stock_minimo: number;
  unidad_medida: string;
}

export interface ProductStats {
  productos_activos: number;
  stock_bajo_count: number;
  categorias_count: number;
  valor_inventario: number | string;
  alertas_stock: ProductAlertItem[];
}

export interface ProductFiltersState {
  search: string;
  categoria: string;
  nivel_stock: string;
  estado: string;
  page: number;
  pageSize: number;
}
