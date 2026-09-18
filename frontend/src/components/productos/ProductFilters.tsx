'use client';

import React from 'react';
import { Search, Plus, RotateCcw } from 'lucide-react';

interface ProductFiltersProps {
  search: string;
  categoria: string;
  nivelStock: string;
  estado: string;
  onSearchChange: (value: string) => void;
  onCategoriaChange: (value: string) => void;
  onNivelStockChange: (value: string) => void;
  onEstadoChange: (value: string) => void;
  onResetFilters: () => void;
  onOpenNewModal: () => void;
  categoriesList?: string[];
}

export default function ProductFilters({
  search,
  categoria,
  nivelStock,
  estado,
  onSearchChange,
  onCategoriaChange,
  onNivelStockChange,
  onEstadoChange,
  onResetFilters,
  onOpenNewModal,
  categoriesList = [],
}: ProductFiltersProps) {
  const hasActiveFilters =
    search.trim() !== '' ||
    categoria !== 'todas' ||
    nivelStock !== 'todos' ||
    estado !== 'todos';

  return (
    <div className="space-y-4 pb-5 border-b border-slate-100">
      {/* Search Input and New Product Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
        <div className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar productos por código, nombre o categoría..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>

        <button
          type="button"
          onClick={onOpenNewModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo producto</span>
        </button>
      </div>

      {/* Dropdown Filters Row */}
      <div className="flex flex-wrap items-center gap-2.5 text-xs">
        {/* Categorías */}
        <select
          value={categoria}
          onChange={(e) => onCategoriaChange(e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
        >
          <option value="todas">Todas las categorías</option>
          {categoriesList.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Niveles de Stock */}
        <select
          value={nivelStock}
          onChange={(e) => onNivelStockChange(e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
        >
          <option value="todos">Todos los niveles de stock</option>
          <option value="normal">Stock normal</option>
          <option value="bajo">Stock bajo</option>
          <option value="agotado">Sin stock (0)</option>
        </select>

        {/* Estados */}
        <select
          value={estado}
          onChange={(e) => onEstadoChange(e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
        >
          <option value="todos">Todos los estados</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>

        {/* Limpiar Filtros */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>
    </div>
  );
}
