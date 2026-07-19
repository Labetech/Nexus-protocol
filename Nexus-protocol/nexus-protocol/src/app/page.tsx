import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              NEXUS PROTOCOL
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</a>
            <a href="#analytics" className="hover:text-cyan-400 transition-colors">Analytics</a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">Security</a>
          </nav>

          <div>
            <button className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/60 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm shadow-cyan-950">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Decentralized Yield Optimization
          </h1>
          <p className="text-slate-400 text-lg">
            Maximize your digital asset efficiency with automated strategy execution and institutional-grade security infrastructure.
          </p>
        </div>

        {/* Data / Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Total Value Locked</p>
            <h3 className="text-3xl font-bold text-white mb-4">$142,834,921</h3>
            <div className="flex items-center text-xs text-emerald-400 font-medium">
              <span>+12.4% over last 7d</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Current APY Index</p>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">18.42%</h3>
            <div className="flex items-center text-xs text-slate-400 font-medium">
              <span>Optimized across 14 vaults</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Active Smart Vaults</p>
            <h3 className="text-3xl font-bold text-white mb-4">32 / 32</h3>
            <div className="flex items-center text-xs text-emerald-400 font-medium">
              <span>All systems operational</span>
            </div>
          </div>

        </div>

        {/* Interface Prompt Section */}
        <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-8 max-w-xl mx-auto text-center">
          <h4 className="text-lg font-bold text-slate-200 mb-2">Access Secure Vault Portal</h4>
          <p className="text-slate-400 text-sm mb-6">Verify your credentials to review your position details and portfolio balances.</p>
          <div className="space-y-3">
            <input 
              type="password" 
              placeholder="Enter Access Key or Phrase" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-200"
            />
            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm py-3 rounded-xl transition-colors shadow-lg shadow-cyan-500/10">
              Initialize Portal Authentication
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}