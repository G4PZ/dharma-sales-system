'use client';

import React, { useState } from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';

interface ClientFiltersProps {
  search: string;
  tipoCliente: string;
  estado: string;
  ciudad: string;
  onSearchChange: (value: string) => void;
  onTipoClienteChange: (value: string) => void;
  onEstadoChange: (value: string) => void;
  onCiudadChange: (value: string) => void;
  onResetFilters: () => void;
  availableCities?: string[];
}

export default function ClientFilters({
  search,
  tipoCliente,
  estado,
  ciudad,
  onSearchChange,
  onTipoClienteChange,
  onEstadoChange,
  onCiudadChange,
  onResetFilters,
  availableCities = ['Lima', 'Callao', 'Trujillo', 'Arequipa'],
}: ClientFiltersProps) {
  const [showFilters, setShowFilters] = useState(true);

  const hasActiveFilters =
    search.trim() !== '' ||
    tipoCliente !== 'todos' ||
    estado !== 'todos' ||
    ciudad !== 'todas';

  return (
    <div className="space-y-4">
      {/* Barra de Búsqueda y Botón Filtros */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Input de Búsqueda Principal */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por RUC, nombre, contacto o correo..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Botón Alternar Filtros */}
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 border rounded-xl text-xs font-semibold transition-colors cursor-pointer ${showFilters || hasActiveFilters
              ? 'bg-blue-50/60 border-blue-200 text-blue-700'
              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
        >
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          <span>Filtros</span>
        </button>
      </div>

      {/* Panel de Selectores Desplegables */}
      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-slate-100 animate-in fade-in-50 duration-200">
          {/* Tipo de Cliente */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Tipo de cliente
            </label>
            <select
              value={tipoCliente}
              onChange={(e) => onTipoClienteChange(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <option value="todos">Todos</option>
              <option value="Empresa">Empresa</option>
              <option value="Persona">Persona</option>
            </select>
          </div>

          {/* Estado */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Estado
            </label>
            <select
              value={estado}
              onChange={(e) => onEstadoChange(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <option value="todos">Todos</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>

          {/* Ciudad */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Ciudad
            </label>
            <select
              value={ciudad}
              onChange={(e) => onCiudadChange(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <option value="todas">Todas</option>
              {availableCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Botón Limpiar Filtros */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={onResetFilters}
              disabled={!hasActiveFilters}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Limpiar filtros</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
