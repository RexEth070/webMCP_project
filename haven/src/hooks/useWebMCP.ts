import { useEffect, useRef, useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

declare global {
  interface Document {
    modelContext?: {
      registerTool: (tool: any) => void;
      deregisterTool?: (toolName: string) => void;
    }
  }
}

export function useWebMCP() {
  const context = useDashboard();
  const stateRef = useRef(context);
  const [isRegistered, setIsRegistered] = useState(false);
  
  useEffect(() => {
    stateRef.current = context;
  }, [context]);

  useEffect(() => {
    if (isRegistered) return;

    let retryCount = 0;
    const maxRetries = 20; // 10 seconds total (500ms * 20)
    
    const tryRegister = () => {
      const registry = (window as any).modelContext || (navigator as any).modelContext || document.modelContext;
      
      if (!registry) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(tryRegister, 500);
        } else {
          console.log('WebMCP: modelContext not found after retries. Tools not registered.');
        }
        return;
      }

      console.log('WebMCP: Registering agent tools...');

      const tools = [
        {
          name: 'set_currency',
          description: 'Updates the global currency for the dashboard (e.g. USD, NGN).',
          inputSchema: {
            type: 'object',
            properties: {
              currency: { type: 'string', description: 'Currency code, e.g., USD, NGN' }
            },
            required: ['currency']
          },
          execute: async (params: any) => {
            try {
              stateRef.current.setCurrency(params.currency);
              return JSON.stringify({ success: true, message: `Currency set to ${params.currency}` });
            } catch (e) {
              return JSON.stringify({ success: false });
            }
          }
        },
        {
          name: 'set_net_worth',
          description: 'Updates the users base net worth and the current month context.',
          inputSchema: {
            type: 'object',
            properties: {
              month: { type: 'string', description: 'Month name e.g., January' },
              year: { type: 'string', description: 'Year e.g., 2024' },
              netWorthAmount: { type: 'number', description: 'The net worth amount' }
            },
            required: ['month', 'year', 'netWorthAmount']
          },
          execute: async (params: any) => {
            try {
              stateRef.current.setCurrentMonth(params.month);
              stateRef.current.setCurrentYear(params.year);
              stateRef.current.setNetWorthAmount(params.netWorthAmount);
              return JSON.stringify({ success: true });
            } catch (e) {
              return JSON.stringify({ success: false });
            }
          }
        },
        {
          name: 'get_financial_summary',
          description: 'Returns the current financial metrics including monthly spend and savings rate.',
          inputSchema: { type: 'object', properties: {}, required: [] },
          execute: async () => JSON.stringify({
            monthlySpend: stateRef.current.monthlySpend,
            savingsRate: stateRef.current.savingsRate,
            netWorth: stateRef.current.netWorthAmount
          })
        },
        {
          name: 'add_transaction',
          description: 'Adds a new financial transaction and subtracts it from net worth.',
          inputSchema: {
            type: 'object',
            properties: {
              date: { type: 'string', description: 'Date in YYYY-MM-DD format' },
              merchant: { type: 'string', description: 'Name of the merchant or entity' },
              category: { type: 'string', description: 'Transaction category (e.g., Groceries, Software)' },
              amount: { type: 'number', description: 'Amount of the transaction (negative for expenses, positive for income)' },
              status: { type: 'string', description: 'Status (e.g., Completed, Pending)' }
            },
            required: ['date', 'merchant', 'category', 'amount', 'status']
          },
          execute: async (params: any) => {
            try {
              stateRef.current.addTransaction({
                date: params.date,
                merchant: params.merchant,
                category: params.category,
                amount: params.amount,
                status: params.status
              });
              return JSON.stringify({ success: true, message: 'Transaction added successfully' });
            } catch (e) {
              return JSON.stringify({ success: false, message: 'Failed to add transaction' });
            }
          }
        },
        {
          name: 'set_agent_processing',
          description: 'Updates the visual processing status on the agent dashboard.',
          inputSchema: {
            type: 'object',
            properties: {
              processing: { type: 'boolean' },
              done: { type: 'boolean' }
            },
            required: ['processing']
          },
          execute: async (params: any) => {
            try {
              stateRef.current.setAgentProcessing(params.processing, params.done || false);
              return JSON.stringify({ success: true });
            } catch (e) {
              return JSON.stringify({ success: false });
            }
          }
        },
        {
          name: 'add_feed_item',
          description: 'Adds an activity feed item to the recent activity list.',
          inputSchema: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              type: { type: 'string', enum: ['upload', 'agent', 'system'] }
            },
            required: ['title', 'type']
          },
          execute: async (params: any) => {
            try {
              stateRef.current.addFeedItem(params.title, params.type);
              return JSON.stringify({ success: true });
            } catch (e) { return JSON.stringify({ success: false }); }
          }
        }
      ];

      tools.forEach(tool => registry.registerTool(tool));
      setIsRegistered(true);

      // We attach the cleanup to window so we can clean up if the component unmounts
      (window as any)._cleanupWebMCP = () => {
        if (registry.deregisterTool) {
          tools.forEach(tool => registry.deregisterTool!(tool.name));
        }
      };
    };

    tryRegister();

    return () => {
      if ((window as any)._cleanupWebMCP) {
        (window as any)._cleanupWebMCP();
      }
    };
  }, [isRegistered]);
}

