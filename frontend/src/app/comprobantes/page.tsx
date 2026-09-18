import React from 'react';
import { FileText, Plus, Search, Filter } from 'lucide-react';

export default function ComprobantesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Comprobantes
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Facturación electrónica, boletas y notas de crédito de Dharma E.I.R.L.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-blue-700 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Emitir Comprobante</span>
        </button>
      </div>

      {/* Main Base Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por serie, número (F001, B001)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              readOnly
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-2 px-3.5 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors self-end sm:self-auto"
          >
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filtrar</span>
          </button>
        </div>

        <div className="py-16 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            Módulo de Comprobantes Electrónicos
          </h3>
          <p className="text-xs text-slate-500 max-w-md mt-1">
            Estructura visual base lista para la emisión y consulta de Facturas, Boletas de Venta, Notas de Crédito y estado SUNAT.
          </p>
        </div>
      </div>
    </div>
  );
}
