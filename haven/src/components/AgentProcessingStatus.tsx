import React from 'react';
import { CircleCheckIcon, Sparkles, Loader2 } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export function AgentProcessingStatus() {
  const { isAgentProcessing, agentTaskDone } = useDashboard();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Sparkles className="text-red-500" size={20} />
          Agent Status
        </h3>
        {isAgentProcessing && !agentTaskDone && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            Processing
          </span>
        )}
        {agentTaskDone && !isAgentProcessing && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Done
          </span>
        )}
        {!isAgentProcessing && !agentTaskDone && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            Idle
          </span>
        )}
      </div>

      <div className="mx-auto w-full flex flex-col items-center justify-center py-6">
        {isAgentProcessing ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="size-8 text-red-500 animate-spin" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Analyzing transactions...
            </span>
          </div>
        ) : agentTaskDone ? (
          <div className="flex flex-col items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <CircleCheckIcon className="size-8 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              All tasks processed!
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-full">
              <Sparkles className="size-6 text-gray-400" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Agent is standing by. Upload a bank statement to begin.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
