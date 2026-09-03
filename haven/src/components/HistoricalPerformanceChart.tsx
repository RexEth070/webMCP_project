import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../context/DashboardContext';

export function HistoricalPerformanceChart() {
  const { historicalData, formatCurrency } = useDashboard();

  // Reverse data so chronological is left-to-right
  const data = [...historicalData].reverse();

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full h-[400px] flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-accent-black)]">Net Worth Trend</h3>
        <p className="text-sm text-gray-500">Your total wealth over the last several months</p>
      </div>

      {data.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          No historical data available.
        </div>
      ) : (
        <div className="flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary-red)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-primary-red)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                        <p className="text-sm font-medium text-gray-500 mb-1">{label} {payload[0].payload.year}</p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="netWorth" 
                stroke="var(--color-primary-red)" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorNetWorth)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
