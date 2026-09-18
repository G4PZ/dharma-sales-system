import React from 'react';
import { TriangleAlert, Sparkles, Filter } from 'lucide-react';

export default function AlertasIAPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Alertas IA
            </h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100">
              3 activas
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Detección inteligente de anomalías, quiebres de stock y operaciones inusuales.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-slate-800 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Analizar Ahora</span>
        </button>
      </div>

      {/* Main Base Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-medium">
              Todas (3)
            </span>
            <span className="px-3 py-1.5 rounded-xl text-slate-500 hover:bg-slate-50 cursor-pointer">
              Críticas (1)
            </span>
            <span className="px-3 py-1.5 rounded-xl text-slate-500 hover:bg-slate-50 cursor-pointer">
              Preventivas (2)
            </span>
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
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
            <TriangleAlert className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            Módulo de Alertas Inteligentes
          </h3>
          <p className="text-xs text-slate-500 max-w-md mt-1">
            Estructura visual base lista para la monitorización de patrones atípicos de facturación, prevención de mermas y alertas automatizadas.
          </p>
        </div>
      </div>
    </div>
  );
}
