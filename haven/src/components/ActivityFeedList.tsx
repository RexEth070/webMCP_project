import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { formatDistanceToNow } from 'date-fns';

export function ActivityFeedList() {
  const { feed } = useDashboard();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6">Recent Activity</h3>
      
      <div className="space-y-6 flex-grow overflow-y-auto pr-2">
        {feed.map((activity, index) => (
          <div key={activity.id} className="relative flex gap-4">
            {/* Timeline connector */}
            {index !== feed.length - 1 && (
              <div className="absolute top-8 bottom-[-24px] left-[11px] w-[2px] bg-gray-100 dark:bg-gray-700" />
            )}
            
            <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-800">
              {activity.type === 'agent' && <div className="w-2 h-2 rounded-full bg-red-500" />}
              {activity.type === 'upload' && <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />}
              {activity.type === 'system' && <div className="w-2 h-2 rounded-full bg-gray-400" />}
            </div>
            
            <div className="flex flex-col pt-0.5">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </span>
            </div>
          </div>
        ))}
        {feed.length === 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
            No recent activity.
          </div>
        )}
      </div>
    </div>
  );
}
