import React, { useMemo } from 'react';
import { useDashboard } from '../context/DashboardContext';

export function SavingsMoodCard() {
  const { savingsRate, isAgentProcessing } = useDashboard();

  const moodConfig = useMemo(() => {
    if (savingsRate >= 70) {
      return {
        image: '/images/mood-happy.png',
        title: 'Good saving behavior',
        message: 'Your savings rate is fantastic. Keep it up!',
        color: 'text-green-500'
      };
    } else if (savingsRate >= 30) {
      return {
        image: '/images/mood-neutral.png',
        title: 'Bad saving behavior',
        message: 'You are saving, but there is room for improvement.',
        color: 'text-yellow-500'
      };
    } else {
      return {
        image: '/images/mood-disappointed.png',
        title: 'You are a spender',
        message: 'Your savings rate is low this month. Let\'s review your expenses.',
        color: 'text-red-500'
      };
    }
  }, [savingsRate]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center justify-center text-center">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Savings Mood</h3>
      
      {isAgentProcessing ? (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[220px]">
          <div className="w-12 h-12 border-4 border-[var(--color-primary-red)] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h4 className="text-xl font-bold mb-2 text-gray-600 dark:text-gray-300">Processing...</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Agent is calculating your expenses</p>
        </div>
      ) : (
        <>
          <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
            <img 
              src={moodConfig.image} 
              alt={moodConfig.title} 
              className="max-w-full max-h-full object-contain animate-bounce-slow"
            />
          </div>
          <h4 className={`text-xl font-bold mb-2 ${moodConfig.color}`}>{moodConfig.title}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {moodConfig.message}
          </p>
        </>
      )}
    </div>
  );
}
