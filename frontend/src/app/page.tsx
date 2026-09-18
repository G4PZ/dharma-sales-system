'use client';

import React from 'react';
import {
  ShoppingCart,
  Package,
  Users,
  TriangleAlert,
  Calendar,
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import SalesChart from '@/components/dashboard/SalesChart';
import CategoryChart from '@/components/dashboard/CategoryChart';
import RecentSalesTable from '@/components/dashboard/RecentSalesTable';
import AlertsList from '@/components/dashboard/AlertsList';

export default function DashboardPage() {
  const [currentDate, setCurrentDate] = React.useState<string>('');

  React.useEffect(() => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(now);
    setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Title & Subtitle + Date Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Bienvenido al sistema de gestión comercial de Dharma E.I.R.L.
          </p>
        </div>

        {/* Date Display */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 self-start sm:self-auto bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-2xs min-h-[32px]">
          <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
          <span suppressHydrationWarning>
            {currentDate}
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <StatCard
          title="Ventas del mes"
          value="S/ 24,750"
          trend="12%"
          trendDirection="up"
          trendVariant="positive"
          period="vs. mes anterior"
          icon={ShoppingCart}
          iconBgClass="bg-blue-50"
          iconColorClass="text-blue-600"
        />

        <StatCard
          title="Productos activos"
          value="127"
          trend="5%"
          trendDirection="up"
          trendVariant="positive"
          period="vs. mes anterior"
          icon={Package}
          iconBgClass="bg-emerald-50"
          iconColorClass="text-emerald-600"
        />

        <StatCard
          title="Clientes registrados"
          value="89"
          trend="8%"
          trendDirection="up"
          trendVariant="positive"
          period="vs. mes anterior"
          icon={Users}
          iconBgClass="bg-purple-50"
          iconColorClass="text-purple-600"
        />

        <StatCard
          title="Alertas IA"
          value="3"
          trend="200%"
          trendDirection="up"
          trendVariant="warning"
          period="vs. mes anterior"
          icon={TriangleAlert}
          iconBgClass="bg-rose-50"
          iconColorClass="text-rose-500"
        />
      </div>

      {/* Charts Section: Monthly Sales & Category Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="lg:col-span-1">
          <CategoryChart />
        </div>
      </div>

      {/* Bottom Section: Recent Sales & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentSalesTable />
        <AlertsList />
      </div>
    </div>
  );
}
