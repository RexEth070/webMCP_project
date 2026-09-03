import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, PieChart, Activity, Settings, Bell, LogOut } from 'lucide-react';
import { UserAvatar } from './UserAvatar';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, active, onClick }: SidebarItemProps) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
      active 
        ? 'bg-[var(--color-primary-red)] text-white font-medium shadow-md shadow-red-500/20' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-[var(--color-accent-black)]'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const DashboardLayout = ({ children, activeTab = 'Overview', onTabChange }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-soft-bg)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200/60 flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6">
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={<Home size={20} />} label="Overview" active={activeTab === 'Overview'} onClick={() => onTabChange?.('Overview')} />
          <SidebarItem icon={<Activity size={20} />} label="Transactions" active={activeTab === 'Transactions'} onClick={() => onTabChange?.('Transactions')} />
          <SidebarItem icon={<PieChart size={20} />} label="Month-over-Month" active={activeTab === 'Month-over-Month'} onClick={() => onTabChange?.('Month-over-Month')} />
        </nav>

        <div className="p-4 border-t border-gray-100 flex items-center justify-start gap-2 px-6">
          <button 
            onClick={() => onTabChange?.('Settings')}
            className={`p-2.5 rounded-xl transition-all ${
              activeTab === 'Settings'
                ? 'bg-[var(--color-primary-red)] text-white shadow-md shadow-red-500/20'
                : 'text-gray-500 hover:text-[var(--color-accent-black)] hover:bg-gray-100'
            }`}
            title="Vault Settings"
          >
            <Settings size={20} />
          </button>
          <button 
            onClick={() => navigate('/')}
            className="p-2.5 text-gray-500 hover:text-[var(--color-primary-red)] hover:bg-red-50 rounded-xl transition-all" 
            title="Log Out"
          >
            <LogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* TopBar */}
        <header className="h-16 bg-white border-b border-gray-200/60 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[var(--color-accent-black)] transition-colors">
              <Bell size={20} />
            </button>
            <UserAvatar name="Alex Brand" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
