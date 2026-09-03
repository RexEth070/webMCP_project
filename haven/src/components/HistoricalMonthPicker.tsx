import React, { useState } from 'react';
import { useDashboard, HistoricalMonthData } from '../context/DashboardContext';
import { MonthlyReviewModal } from './MonthlyReviewModal';

export function HistoricalMonthPicker() {
  const { historicalData } = useDashboard();
  const [selectedMonth, setSelectedMonth] = useState<HistoricalMonthData | null>(null);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">History</h3>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            Available
          </span>
        </div>
        
        <div className="space-y-2 flex-grow overflow-y-auto pr-2">
          {historicalData.map((data) => (
            <button
              key={data.id}
              onClick={() => setSelectedMonth(data)}
              className="w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-600 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {data.month} {data.year}
                </span>
              </div>
              
              <span className="text-xs font-semibold text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Review
              </span>
            </button>
          ))}
          {historicalData.length === 0 && (
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              No historical data available.
            </div>
          )}
        </div>
      </div>
      
      <MonthlyReviewModal 
        isOpen={selectedMonth !== null} 
        onClose={() => setSelectedMonth(null)} 
        monthData={selectedMonth} 
      />
    </>
  );
}
