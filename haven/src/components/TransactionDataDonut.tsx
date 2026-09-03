import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';
import { useDashboard } from '../context/DashboardContext';

export function TransactionDataDonut() {
  const { transactions, formatCurrency } = useDashboard();
  
  const income = transactions.reduce((sum, tx) => tx.amount > 0 ? sum + tx.amount : sum, 0);
  const outgoing = transactions.reduce((sum, tx) => tx.amount < 0 ? sum + Math.abs(tx.amount) : sum, 0);
  const saved = income - outgoing;
  
  const chartData = [
    { name: 'Income', value: income, color: '#10B981' },
    { name: 'Outgoing', value: outgoing, color: '#EF4444' },
    { name: 'Saved', value: saved > 0 ? saved : 0, color: '#3B82F6' },
  ];
  
  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm relative w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Transaction Flow</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Income vs Expenses vs Saved</p>
      </div>

      <div className="flex-1 min-h-[200px] w-full relative mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-gray-500 dark:fill-gray-400 text-xs font-medium uppercase tracking-wider"
                        >
                          Money Flow
                        </tspan>
                      </text>
                    )
                  }
                  return null;
                }}
              />
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-lg p-3 min-w-[120px]">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{data.name}</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 pl-4">
                        ${data.value.toLocaleString()}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
