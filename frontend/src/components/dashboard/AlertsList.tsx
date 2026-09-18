'use client';

import React from 'react';
import Link from 'next/link';
import { TriangleAlert, Clock, Info } from 'lucide-react';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Stock bajo',
    description: 'Paracetamol 500mg - Solo 5 unidades',
    timeAgo: 'Hace 2 horas',
    icon: TriangleAlert,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    id: '2',
    title: 'Lote próximo a vencer',
    description: 'Lote #A782 - Vence en 15 días',
    timeAgo: 'Hace 4 horas',
    icon: Clock,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    id: '3',
    title: 'Venta inusual',
    description: 'Monto mayor al promedio: S/ 5,800',
    timeAgo: 'Hace 6 horas',
    icon: Info,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
];

export default function AlertsList() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-800">
          Alertas y notificaciones
        </h3>
        <Link
          href="/alertas-ia"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          Ver todas →
        </Link>
      </div>

      {/* Notification List Items */}
      <div className="space-y-3 my-auto">
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 shrink-0 ml-3 whitespace-nowrap">
                {item.timeAgo}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
