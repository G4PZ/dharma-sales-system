'use client';

import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function ClientBannerWidget() {
  return (
    <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-sky-50/40 rounded-2xl border border-blue-100/70 p-5 flex flex-col justify-between group hover:border-blue-200 transition-colors">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
          <Sparkles className="w-5 h-5" />
        </div>
        <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-slate-800 leading-tight">
          Construyendo relaciones a largo plazo
        </h4>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          Clientes satisfechos, negocios más fuertes. Mantén actualizada la información de contacto y fiscal de tu cartera.
        </p>
      </div>
    </div>
  );
}
