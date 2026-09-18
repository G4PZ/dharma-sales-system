export interface Cliente {
  id: number;
  tipo_documento: string;
  numero_documento: string;
  razon_social: string;
  nombre_contacto: string | null;
  telefono: string | null;
  email: string | null;
  direccion: string | null;
  ciudad: string | null;
  tipo_cliente: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ClienteCreate {
  tipo_documento: string;
  numero_documento: string;
  razon_social: string;
  nombre_contacto?: string | null;
  telefono?: string | null;
  email?: string | null;
  direccion?: string | null;
  ciudad?: string | null;
  tipo_cliente: string;
  is_active?: boolean;
}

export interface ClienteUpdate {
  tipo_documento?: string;
  numero_documento?: string;
  razon_social?: string;
  nombre_contacto?: string | null;
  telefono?: string | null;
  email?: string | null;
  direccion?: string | null;
  ciudad?: string | null;
  tipo_cliente?: string;
  is_active?: boolean;
}

export interface ClientListResponse {
  items: Cliente[];
  total: number;
  skip: number;
  limit: number;
}

export interface ClientStats {
  clientes_activos: number;
  nuevos_este_mes: number;
  empresas_count: number;
  clientes_inactivos: number;
  ultimos_clientes: Cliente[];
}

export interface ClientFiltersState {
  search: string;
  tipo_cliente: string;
  estado: string;
  ciudad: string;
  skip: number;
  limit: number;
}
