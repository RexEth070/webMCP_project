"use client"

import React from "react"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { TrendingDownIcon } from 'lucide-react'

const activityData: Array<{ month: string; income: number; expense: number }> = [];

export function ActivityVolumeBar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 w-full h-full flex flex-col">
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            Cash Flow
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
              <TrendingDownIcon size={14} aria-hidden="true" />
              -3.2%
            </span>
          </h3>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Income vs Expenses over time</p>
      </div>
      
      <div className="p-6 pt-0 flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityData}
            layout="vertical"
            margin={{
              left: 0,
              right: 0,
              top: 10,
              bottom: 10
            }}
            barCategoryGap="30%"
          >
            <YAxis
              type="category"
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={12}
              tick={{ fill: '#6b7280' }}
            />
            <XAxis
              type="number"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.02)' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md rounded-lg p-3 min-w-[150px]">
                      <div className="border-b border-gray-100 dark:border-gray-700 pb-2 mb-2">
                        <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                          {label} 2024
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {payload.map((entry, index) => (
                          <div key={index} className="flex w-full items-center justify-between gap-4">
                            <div className="flex items-center gap-1.5">
                              <div
                                className="h-2.5 w-2.5 shrink-0 rounded-full"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                {entry.name}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              ${Number(entry.value).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="income" name="Income" fill="#10B981" radius={[0, 4, 4, 0]} />
            <Bar dataKey="expense" name="Expense" fill="#EF4444" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
