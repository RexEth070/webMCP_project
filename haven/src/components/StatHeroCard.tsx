import React from 'react';

interface StatHeroCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

export const StatHeroCard = ({ title, value, trend, isPositive }: StatHeroCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col justify-between transition-transform hover:scale-[0.98] duration-200">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold tracking-tight text-[var(--color-accent-black)] tabular-nums">
          {value}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-[var(--color-primary-red)]'}`}>
          {isPositive ? (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ) : (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          )}
          {trend}
        </div>
      </div>
    </div>
  );
};
