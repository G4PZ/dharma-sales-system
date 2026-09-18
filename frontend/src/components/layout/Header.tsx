'use client';

import React from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white border-b border-slate-200/80 shadow-xs">
      {/* Left side: Hamburger + Search Input */}
      <div className="flex items-center gap-3 md:gap-6 flex-1 max-w-xl">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-slate-600 rounded-lg hover:bg-slate-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-slate-200"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Input */}
        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Buscar productos, clientes, ventas..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100/80 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            readOnly
          />
        </div>
      </div>

      {/* Right side: Notifications + User Profile */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Mobile Search Icon Button */}
        <button
          className="p-2 text-slate-600 rounded-xl hover:bg-slate-100 sm:hidden"
          aria-label="Buscar"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications Button with Red Badge */}
        <button
          className="relative p-2 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Notificaciones"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
        </button>

        <div className="h-6 w-px bg-slate-200 hidden sm:block" />

        {/* User Profile Widget */}
        <div className="flex items-center gap-3 pl-1 py-1 cursor-pointer select-none group">
          {/* Avatar Initials Badge */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0B192C] text-white font-semibold text-xs shadow-sm ring-2 ring-slate-100">
            GP
          </div>

          {/* User Details */}
          <div className="hidden md:block text-left">
            <div className="text-sm font-semibold text-slate-800 leading-tight">
              Giancarlos Pagador
            </div>
            <div className="text-[11px] font-normal text-slate-500 leading-tight">
              Administrador
            </div>
          </div>

          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
