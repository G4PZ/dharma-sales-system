'use client';

import React from 'react';
import Link from 'next/link';

interface SaleRecord {
  id: string;
  date: string;
  customer: string;
  total: string;
  status: 'Completada' | 'Pendiente';
}

const recentSales: SaleRecord[] = [
  {
    id: '1',
    date: '16/09/2025',
    customer: 'Distribuidora López',
    total: 'S/ 1,250',
    status: 'Completada',
  },
  {
    id: '2',
    date: '16/09/2025',
    customer: 'Minimarket San José',
    total: 'S/ 840',
    status: 'Completada',
  },
  {
    id: '3',
    date: '15/09/2025',
    customer: 'Corporación Vega',
    total: 'S/ 2,150',
    status: 'Completada',
  },
  {
    id: '4',
    date: '15/09/2025',
    customer: 'Boticas del Norte',
    total: 'S/ 670',
    status: 'Pendiente',
  },
  {
    id: '5',
    date: '14/09/2025',
    customer: 'Inversiones R&A',
    total: 'S/ 1,430',
    status: 'Completada',
  },
];

export default function RecentSalesTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-800">Últimas ventas</h3>
        <Link
          href="/ventas"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          Ver todas →
        </Link>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold">
              <th className="pb-3 pr-4">Fecha</th>
              <th className="pb-3 px-4">Cliente</th>
              <th className="pb-3 px-4">Total</th>
              <th className="pb-3 pl-4 text-right sm:text-left">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-normal text-slate-700">
            {recentSales.map((sale) => (
              <tr key={sale.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 pr-4 text-slate-500 whitespace-nowrap">
                  {sale.date}
                </td>
                <td className="py-3.5 px-4 font-medium text-slate-900 whitespace-nowrap">
                  {sale.customer}
                </td>
                <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                  {sale.total}
                </td>
                <td className="py-3.5 pl-4 text-right sm:text-left whitespace-nowrap">
                  {sale.status === 'Completada' ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Completada
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-50 text-amber-600 border border-amber-100">
                      Pendiente
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
