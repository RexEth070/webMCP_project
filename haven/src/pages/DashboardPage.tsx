import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout'
import { StatHeroCard } from '../components/StatHeroCard'
import { NetWorthTrendLine } from '../components/NetWorthTrendLine'
import { TransactionDataGrid } from '../components/TransactionDataGrid'
import { TransactionDataDonut } from '../components/TransactionDataDonut'
import { SavingsMoodCard } from '../components/SavingsMoodCard'
import { useDashboard } from '../context/DashboardContext'
import { useWebMCP } from '../hooks/useWebMCP'
import { HistoricalPerformanceChart } from '../components/HistoricalPerformanceChart'
import { SettingsTab } from '../components/SettingsTab'

export function DashboardPage() {
  const { monthlySpend, savingsRate, formatCurrency } = useDashboard();
  const [activeTab, setActiveTab] = useState('Overview');
  useWebMCP();

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      
      {activeTab === 'Overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatHeroCard title="Monthly Spend" value={formatCurrency(monthlySpend)} trend="12% from last month" isPositive={false} />
            <StatHeroCard title="Savings Rate" value={`${savingsRate}%`} trend="2.1% from last month" isPositive={true} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <NetWorthTrendLine />
            </div>
            <div className="lg:col-span-1 flex flex-col gap-6">
              <SavingsMoodCard />
            </div>
          </div>
        </>
      )}

      {activeTab === 'Transactions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <TransactionDataGrid />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-6">
            <TransactionDataDonut />
          </div>
        </div>
      )}

      {activeTab === 'Month-over-Month' && (
        <div className="space-y-6">
          <HistoricalPerformanceChart />
        </div>
      )}

      {activeTab === 'Settings' && (
        <SettingsTab />
      )}

    </DashboardLayout>
  )
}
