import React from 'react';
import { useDashboard } from '../context/DashboardContext';

export const TransactionDataGrid = () => {
  const { transactions } = useDashboard();
  return (
    <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200/60 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-[var(--color-accent-black)]">Recent Transactions</h3>
        <button className="text-sm text-gray-500 hover:text-[var(--color-primary-red)] font-medium transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase bg-white border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Merchant</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium text-right">Amount</th>
              <th className="px-6 py-4 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{tx.date}</td>
                <td className="px-6 py-4 font-medium text-[var(--color-accent-black)] whitespace-nowrap">{tx.merchant}</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium group-hover:bg-white border border-transparent group-hover:border-gray-200 transition-colors">
                    {tx.category}
                  </span>
                </td>
                <td className={`px-6 py-4 font-medium text-right tabular-nums whitespace-nowrap ${tx.amount > 0 ? 'text-green-600' : 'text-[var(--color-accent-black)]'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`inline-flex items-center gap-1.5 ${tx.status === 'Completed' ? 'text-gray-500' : 'text-amber-500'}`}>
                    <div className={`size-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-gray-400' : 'bg-amber-500'}`} />
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
