import React from 'react';
import { useDashboard, HistoricalMonthData } from '../context/DashboardContext';

interface MonthlyReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  monthData: HistoricalMonthData | null;
}

export function MonthlyReviewModal({ isOpen, onClose, monthData }: MonthlyReviewModalProps) {
  const { formatCurrency } = useDashboard();

  if (!isOpen || !monthData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 w-full max-w-lg overflow-hidden transform transition-all">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {monthData.month} {monthData.year} Review
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Ending Net Worth</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formatCurrency(monthData.netWorth)}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Spend</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{formatCurrency(monthData.monthlySpend)}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Savings Rate</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">{monthData.savingsRate}%</p>
            </div>
            <div className="w-12 h-12">
              <img 
                src={monthData.savingsRate >= 15 ? '/images/mood-happy.png' : monthData.savingsRate >= 5 ? '/images/mood-neutral.png' : '/images/mood-disappointed.png'} 
                alt="Mood" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Close Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
