import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { format } from 'date-fns';

// Interfaces
export interface Transaction {
  id: number;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  status: string;
}

export interface HistoricalMonthData {
  id: string;
  month: string;
  year: string;
  netWorth: number;
  monthlySpend: number;
  savingsRate: number;
}

export interface ActivityFeedItem {
  id: string;
  title: string;
  timestamp: Date;
  type: 'upload' | 'agent' | 'system';
}

export interface DashboardContextType {
  // Global Currency
  currency: string;
  setCurrency: (c: string) => void;
  formatCurrency: (value: number) => string;

  // Current Month State
  currentMonth: string;
  currentYear: string;
  netWorthAmount: number;
  monthlySpend: number;
  savingsRate: number; // Derived
  displayNetWorth: number; // Derived
  
  setCurrentMonth: (m: string) => void;
  setCurrentYear: (y: string) => void;
  setNetWorthAmount: (n: number) => void;
  setMonthlySpend: (s: number) => void;

  // History
  historicalData: HistoricalMonthData[];
  setHistoricalData: (data: HistoricalMonthData[]) => void;

  // Transactions
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;

  // Agent State
  isAgentProcessing: boolean;
  agentTaskDone: boolean;
  setAgentProcessing: (processing: boolean, done?: boolean) => void;

  // Feed
  feed: ActivityFeedItem[];
  addFeedItem: (title: string, type: 'upload' | 'agent' | 'system') => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// Removed mockHistoricalData for clean slate

// Custom hook for local storage persistence
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        // Handle Date objects inside the feed array if parsing JSON
        return JSON.parse(item, (key, value) => {
          if (key === 'timestamp') return new Date(value);
          return value;
        });
      }
      return initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue] as const;
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useLocalStorage('haven_v2_currency', 'USD');
  const [currentMonth, setCurrentMonth] = useLocalStorage('haven_v2_month', 'January');
  const [currentYear, setCurrentYear] = useLocalStorage('haven_v2_year', '2024');
  const [netWorthAmount, setNetWorthAmount] = useLocalStorage('haven_v2_netWorthAmount', 0);
  const [monthlySpend, setMonthlySpend] = useLocalStorage('haven_v2_monthlySpend', 0);
  const [historicalData, setHistoricalData] = useLocalStorage<HistoricalMonthData[]>('haven_v2_historicalData', []);
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('haven_v2_transactions', []);
  const [feed, setFeed] = useLocalStorage<ActivityFeedItem[]>('haven_v2_feed', []);
  
  const [isAgentProcessing, setIsAgentProcessing] = useState(false);
  const [agentTaskDone, setAgentTaskDone] = useState(false);

  // Dynamic Derived States
  // The actual net worth displayed dynamically subtracts the spend
  const displayNetWorth = netWorthAmount - monthlySpend; 
  const savingsRate = useMemo(() => {
    if (netWorthAmount <= 0) return 0;
    const rate = (displayNetWorth / netWorthAmount) * 100;
    return Math.max(0, Math.min(100, Number(rate.toFixed(1))));
  }, [netWorthAmount, displayNetWorth]);

  const setAgentProcessingAction = (processing: boolean, done: boolean = false) => {
    setIsAgentProcessing(processing);
    setAgentTaskDone(done);
  };

  const addTransaction = (tx: Omit<Transaction, 'id'>) => {
    setTransactions(prev => [{ ...tx, id: Math.max(0, ...prev.map(t => t.id)) + 1 }, ...prev]);
    if (tx.amount < 0) {
      setMonthlySpend(prev => prev + Math.abs(tx.amount));
    }
  };

  const addFeedItemAction = (title: string, type: 'upload' | 'agent' | 'system') => {
    setFeed(prev => [{ id: Date.now().toString(), title, timestamp: new Date(), type }, ...prev].slice(0, 10));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  return (
    <DashboardContext.Provider value={{
      currency, setCurrency, formatCurrency,
      currentMonth, setCurrentMonth,
      currentYear, setCurrentYear,
      netWorthAmount, setNetWorthAmount,
      monthlySpend, setMonthlySpend,
      savingsRate, displayNetWorth,
      historicalData, setHistoricalData,
      transactions, addTransaction,
      isAgentProcessing, agentTaskDone, setAgentProcessing: setAgentProcessingAction,
      feed, addFeedItem: addFeedItemAction
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
