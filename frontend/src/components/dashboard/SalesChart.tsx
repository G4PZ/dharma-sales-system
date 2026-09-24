'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MonthlyData {
  month: string;
  value: number;
  highlight?: boolean;
}

const data: MonthlyData[] = [
  { month: 'Ene', value: 4800 },
  { month: 'Feb', value: 9500 },
  { month: 'Mar', value: 11200 },
  { month: 'Abr', value: 13500 },
  { month: 'May', value: 15400 },
  { month: 'Jun', value: 16800 },
  { month: 'Jul', value: 20500 },
  { month: 'Ago', value: 22100 },
  { month: 'Sep', value: 24750, highlight: true },
];

const maxValue = 30000;
const yAxisSteps = [30000, 25000, 20000, 15000, 10000, 5000, 0];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-slate-800">Ventas mensuales</h3>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer hover:bg-slate-50 transition-colors">
          <span>2025</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative flex-1 min-h-[220px] flex items-end">
        {/* Y Axis Grid Lines and Labels */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-7">
          {yAxisSteps.map((val) => (
            <div key={val} className="flex items-center w-full">
              <span className="w-12 text-[11px] font-normal text-slate-400 text-right pr-3 shrink-0">
                {val === 0 ? '0' : val.toLocaleString('es-PE')}
              </span>
              <div className="flex-1 border-b border-slate-100/90" />
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="relative z-10 w-full pl-12 flex items-end justify-between h-[180px] pt-4">
          {data.map((item) => {
            const heightPercent = Math.round((item.value / maxValue) * 100);

            return (
              <div
                key={item.month}
                className="flex-1 flex flex-col items-center group h-full justify-end px-1"
              >
                {/* Bar */}
                <div className="w-full max-w-[28px] flex flex-col justify-end h-full">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-sm transition-all duration-300 group-hover:opacity-90 ${item.highlight
                      ? 'bg-[#2563EB] shadow-sm shadow-blue-500/30'
                      : 'bg-blue-300/80 hover:bg-blue-400'
                      }`}
                    title={`${item.month}: S/ ${item.value.toLocaleString('es-PE')}`}
                  />
                </div>

                {/* X Axis Label */}
                <span
                  className={`mt-2 text-[11px] transition-colors ${item.highlight
                    ? 'font-bold text-slate-900'
                    : 'text-slate-500 font-normal'
                    }`}
                >
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
