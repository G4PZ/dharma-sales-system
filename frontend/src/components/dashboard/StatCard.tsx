'use client';

import React from 'react';
import { LucideIcon, ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection?: 'up' | 'down';
  trendVariant?: 'positive' | 'warning' | 'neutral';
  period: string;
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
}

export default function StatCard({
  title,
  value,
  trend,
  trendDirection = 'up',
  trendVariant = 'positive',
  period,
  icon: Icon,
  iconColorClass,
  iconBgClass,
}: StatCardProps) {
  const trendColor =
    trendVariant === 'warning'
      ? 'text-rose-500 font-semibold'
      : trendVariant === 'positive'
      ? 'text-emerald-600 font-semibold'
      : 'text-slate-600 font-semibold';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow p-5 flex items-start gap-4">
      {/* Icon Circle */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${iconBgClass} ${iconColorClass}`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-500 truncate">{title}</p>
        <p className="text-2xl font-bold text-slate-900 tracking-tight mt-1 truncate">
          {value}
        </p>

        {/* Trend Indicator */}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap text-xs">
          <span className={`inline-flex items-center gap-0.5 ${trendColor}`}>
            {trendDirection === 'up' ? (
              <ArrowUp className="w-3.5 h-3.5" />
            ) : (
              <ArrowDown className="w-3.5 h-3.5" />
            )}
            {trend}
          </span>
          <span className="text-slate-400 font-normal">{period}</span>
        </div>
      </div>
    </div>
  );
}
