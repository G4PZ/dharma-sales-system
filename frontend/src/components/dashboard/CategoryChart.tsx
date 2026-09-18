'use client';

import React from 'react';

interface CategoryItem {
  name: string;
  percentage: number;
  color: string;
  dotColor: string;
}

const categories: CategoryItem[] = [
  { name: 'Alimentos', percentage: 40, color: '#3B82F6', dotColor: 'bg-blue-500' },
  { name: 'Limpieza', percentage: 25, color: '#10B981', dotColor: 'bg-emerald-500' },
  { name: 'Higiene Personal', percentage: 20, color: '#F59E0B', dotColor: 'bg-amber-500' },
  { name: 'Otros', percentage: 15, color: '#8B5CF6', dotColor: 'bg-purple-500' },
];

export default function CategoryChart() {
  // SVG Donut calculation
  const radius = 58;
  const circumference = 2 * Math.PI * radius; // ~364.42

  let accumulatedOffset = 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-slate-800">Ventas por categoría</h3>
      </div>

      {/* Donut and Legend Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-auto py-2">
        {/* SVG Donut */}
        <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
            {/* Background track circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#F1F5F9"
              strokeWidth="22"
            />
            {/* Category segments */}
            {categories.map((cat) => {
              const strokeDasharray = `${(cat.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -accumulatedOffset;
              accumulatedOffset += (cat.percentage / 100) * circumference;

              return (
                <circle
                  key={cat.name}
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke={cat.color}
                  strokeWidth="22"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-500 hover:opacity-90"
                />
              );
            })}
          </svg>

          {/* Donut Inner Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-base font-bold text-slate-900 leading-tight">
              S/ 24,750
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              Total
            </span>
          </div>
        </div>

        {/* Legend List */}
        <div className="w-full sm:w-auto flex-1 space-y-3">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 text-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.dotColor}`} />
                <span className="font-medium text-slate-700 truncate">{item.name}</span>
              </div>
              <span className="font-bold text-slate-900 shrink-0">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
