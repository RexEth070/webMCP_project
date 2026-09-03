import React from "react";
import { useDashboard } from '../context/DashboardContext';

export function NetWorthTrendLine() {
  const { currentMonth, currentYear, displayNetWorth, formatCurrency } = useDashboard();
  
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden w-full h-full flex flex-col items-center justify-center min-h-[350px] transition-all duration-500 hover:shadow-md">
      {/* Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex w-full justify-between items-start mb-4 z-10">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-1 tracking-wider uppercase">Total Net Worth</h3>
          <div className="text-[38px] font-extrabold tracking-tighter text-[var(--color-accent-black)] tabular-nums flex items-center gap-2 leading-none">
            {formatCurrency(displayNetWorth)}
          </div>
        </div>
        
        {/* Dynamic Context Month */}
        <div className="px-2.5 py-1 text-[10px] font-bold bg-[var(--color-primary-red)] text-white shadow-sm rounded-md mt-1">
          {currentMonth} {currentYear}
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center relative z-10 mt-4">
        {/* 3D Money Asset */}
        <div className="relative group cursor-pointer animate-float">
          <img 
            src="/3d-money-transparent.png" 
            alt="3D Money" 
            className="w-48 h-48 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
          />
          {/* Subtle reflection/shadow under the money */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 blur-xl rounded-full" />
        </div>
      </div>
    </div>
  )
}
