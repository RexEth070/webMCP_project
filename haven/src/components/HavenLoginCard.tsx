import React, { useState } from 'react';

export const HavenLoginCard = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-soft-bg)] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-accent-black)] mb-2">
            Create your Vault
          </h1>
          <p className="text-gray-500 text-sm">
            Already have a local vault?{' '}
            <a href="#" className="font-semibold text-[var(--color-primary-red)] hover:underline">
              Sign in
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input 
                id="fullName"
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              <p className="mt-2 text-xs text-gray-500">
                This password encrypts your local database. Do not lose it.
              </p>
            </div>

            {/* Password Hint */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hint">
                Password Recovery Hint
              </label>
              <input 
                id="hint"
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent transition-all"
                placeholder="e.g., Name of my first pet"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-3.5 px-4 bg-[var(--color-accent-black)] text-white font-medium rounded-xl hover:bg-black transition-colors"
          >
            Create Local Vault
          </button>
        </form>

        {/* Legal Line */}
        <p className="mt-8 text-center text-xs text-gray-400">
          By continuing, you agree to Haven's <a href="#" className="hover:text-gray-600 underline decoration-gray-300">Terms of Service</a> and <a href="#" className="hover:text-gray-600 underline decoration-gray-300">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
