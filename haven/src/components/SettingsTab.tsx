import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, KeyRound, CheckCircle2 } from 'lucide-react';

export function SettingsTab() {
  const { theme, setTheme } = useTheme();
  
  // Password Reset State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    // Mock success
    setIsResetSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setIsResetSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Theme Settings */}
        <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Appearance</h3>
            <p className="text-sm text-gray-500">Customize the look and feel of your dashboard.</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setTheme('light')}
              className={`flex-1 flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                theme === 'light' 
                  ? 'border-[var(--color-primary-red)] bg-red-50/10' 
                  : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
              }`}
            >
              <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100">
                <Sun size={24} className={theme === 'light' ? 'text-[var(--color-primary-red)]' : 'text-gray-400'} />
              </div>
              <span className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-gray-500'}`}>Light</span>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={`flex-1 flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                theme === 'dark' 
                  ? 'border-[var(--color-primary-red)] bg-gray-800' 
                  : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
              }`}
            >
              <div className="p-3 bg-gray-900 rounded-full shadow-sm border border-gray-700">
                <Moon size={24} className={theme === 'dark' ? 'text-white' : 'text-gray-400'} />
              </div>
              <span className={`font-medium ${theme === 'dark' ? 'text-gray-900' : 'text-gray-500'}`}>Dark</span>
            </button>
          </div>
        </section>

        {/* Security Settings */}
        <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <KeyRound size={20} className="text-gray-400" />
              Security
            </h3>
            <p className="text-sm text-gray-500">Update your password to keep your vault secure.</p>
          </div>

          <form onSubmit={handlePasswordReset} className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <input 
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-red)]/20 focus:border-[var(--color-primary-red)] outline-none transition-all text-gray-900 placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <input 
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-red)]/20 focus:border-[var(--color-primary-red)] outline-none transition-all text-gray-900 placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
              <input 
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-red)]/20 focus:border-[var(--color-primary-red)] outline-none transition-all text-gray-900 placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="mt-2 w-full py-2.5 rounded-xl bg-[var(--color-accent-black)] hover:bg-gray-800 text-white font-medium transition-colors"
            >
              Update Password
            </button>

            {isResetSuccess && (
              <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-700 animate-in fade-in slide-in-from-top-2">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium">Password updated successfully!</span>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
