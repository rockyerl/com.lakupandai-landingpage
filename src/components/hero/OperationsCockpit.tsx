import React, { useState, useEffect } from 'react';
import { Activity, Users, Clock, CheckCircle2, ChevronRight, Zap, RefreshCw, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MockFeed {
  id: string;
  time: string;
  type: string;
  amount: string;
  agent: string;
  status: 'POSTED' | 'ROUTING' | 'RESOLVING';
  latency: number;
}

export const OperationsCockpit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'network' | 'flow' | 'backoffice'>('flow');
  const [pulseIndex, setPulseIndex] = useState<number>(0);
  const [latency, setLatency] = useState<number>(18);
  const [feedItems, setFeedItems] = useState<MockFeed[]>([
    {
      id: 'TRX-9941',
      time: '11:04:12',
      type: 'Tarik Tunai',
      amount: 'Rp 500.000',
      agent: 'Agen Cikajang-02',
      status: 'POSTED',
      latency: 18
    },
    {
      id: 'TRX-9942',
      time: '11:04:15',
      type: 'Setor Tunai',
      amount: 'Rp 1.500.000',
      agent: 'Agen Garut Kota',
      status: 'POSTED',
      latency: 22
    },
    {
      id: 'TRX-9943',
      time: '11:04:18',
      type: 'Token Listrik',
      amount: 'Rp 100.000',
      agent: 'Agen Singaparna',
      status: 'POSTED',
      latency: 15
    }
  ]);

  // Live simulation of packets and telemetry
  useEffect(() => {
    const packetTimer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 1800);

    const telemetryTimer = setInterval(() => {
      setLatency(16 + Math.floor(Math.random() * 8));
    }, 3200);

    return () => {
      clearInterval(packetTimer);
      clearInterval(telemetryTimer);
    };
  }, []);

  const triggerLiveTransaction = () => {
    const types = ['Tarik Tunai', 'Setor Tunai', 'Transfer Antarbank', 'Tagihan PLN'];
    const agents = ['Agen Ciamis-01', 'Agen Sumedang-04', 'Agen Tasik-03', 'Agen Garut Selatan'];
    const amounts = ['Rp 250.000', 'Rp 750.000', 'Rp 2.000.000', 'Rp 350.000'];
    const randType = types[Math.floor(Math.random() * types.length)];
    const randAgent = agents[Math.floor(Math.random() * agents.length)];
    const randAmount = amounts[Math.floor(Math.random() * amounts.length)];

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    const newId = `TRX-${Math.floor(1000 + Math.random() * 9000)}`;

    const newTrx: MockFeed = {
      id: newId,
      time: timeStr,
      type: randType,
      amount: randAmount,
      agent: randAgent,
      status: 'POSTED',
      latency: 14 + Math.floor(Math.random() * 12)
    };

    setFeedItems((prev) => [newTrx, ...prev.slice(0, 3)]);
    setPulseIndex(0);
  };

  return (
    <div className="bg-[#0E1E30] rounded-2xl border border-slate-700/80 shadow-2xl p-4 sm:p-6 text-white font-sans relative overflow-hidden backdrop-blur-xl group">
      {/* Ambient Lighting Gradient */}
      <div className="absolute -top-24 -right-24 w-52 h-52 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Cockpit Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-700/80 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-300">
              OPERATIONS COCKPIT · REAL-TIME DEMO
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>
            LATENCY: <strong className="text-emerald-400 font-bold">{latency}ms</strong>
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-blue-300 hidden sm:inline">DC-PRIMARY ACTIVE</span>
        </div>
      </div>

      {/* Interactive Tabs with animated layout pill */}
      <div className="grid grid-cols-3 gap-1 my-3 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-[11px] sm:text-xs">
        {[
          { id: 'flow', label: '01. Pipeline Engine' },
          { id: 'network', label: '02. Agen Network' },
          { id: 'backoffice', label: '03. Exception Ops' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative py-1.5 px-2 rounded-lg font-medium transition cursor-pointer text-center ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="cockpitActiveTab"
                  className="absolute inset-0 bg-blue-600 rounded-lg shadow-md"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 truncate block">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Dynamic View Area */}
      <div className="space-y-3.5">
        <AnimatePresence mode="wait">
          {/* TAB 1: PIPELINE ENGINE & LIVE TELEMETRY */}
          {activeTab === 'flow' && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {/* Pipeline Topology Nodes */}
              <div className="bg-slate-900/80 rounded-xl border border-blue-500/30 p-3 sm:p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    Transmisi Paket Data Agen ↔ Core Bank
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                    IDEMPOTENCY_ACTIVE
                  </span>
                </div>

                {/* 3 Step Interactive Visual with Animated Transit Pulses */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-xs relative">
                  {/* Step 1 */}
                  <motion.div
                    animate={{
                      borderColor: pulseIndex === 0 ? '#60A5FA' : '#334155',
                      backgroundColor: pulseIndex === 0 ? 'rgba(30, 58, 138, 0.4)' : '#15273A'
                    }}
                    className="p-2 sm:p-2.5 rounded-lg border text-center relative overflow-hidden"
                  >
                    <span className="text-[9px] font-mono text-slate-400 block">Kanal Lapangan</span>
                    <span className="font-bold text-slate-200 text-xs sm:text-sm truncate block">Agent App</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5 truncate">Device Key</span>
                    {pulseIndex === 0 && (
                      <motion.div
                        layoutId="pulseTracker"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400"
                      />
                    )}
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    animate={{
                      borderColor: pulseIndex === 1 || pulseIndex === 2 ? '#60A5FA' : '#334155',
                      backgroundColor: pulseIndex === 1 || pulseIndex === 2 ? 'rgba(30, 58, 138, 0.4)' : '#15273A'
                    }}
                    className="p-2 sm:p-2.5 rounded-lg border text-center relative overflow-hidden"
                  >
                    <span className="text-[9px] font-mono text-blue-300 block">Transaction Engine</span>
                    <span className="font-bold text-white text-xs sm:text-sm truncate block">API Gateway</span>
                    <span className="text-[9px] text-emerald-400 block mt-0.5 truncate">Hash Stamp</span>
                    {(pulseIndex === 1 || pulseIndex === 2) && (
                      <motion.div
                        layoutId="pulseTracker"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400"
                      />
                    )}
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    animate={{
                      borderColor: pulseIndex === 3 ? '#34D399' : '#334155',
                      backgroundColor: pulseIndex === 3 ? 'rgba(6, 78, 59, 0.4)' : '#15273A'
                    }}
                    className="p-2 sm:p-2.5 rounded-lg border text-center relative overflow-hidden"
                  >
                    <span className="text-[9px] font-mono text-slate-400 block">Sistem Inti Bank</span>
                    <span className="font-bold text-slate-200 text-xs sm:text-sm truncate block">Core Adapter</span>
                    <span className="text-[9px] text-slate-300 block mt-0.5 truncate">ISO 8583 / REST</span>
                    {pulseIndex === 3 && (
                      <motion.div
                        layoutId="pulseTracker"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Interactive Simulated Action Button */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400">
                    Audit Hash: <code className="text-slate-300">0x4a12...99ef</code>
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={triggerLiveTransaction}
                    className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer transition shadow-xs"
                  >
                    <Zap className="w-3 h-3 text-amber-300" />
                    <span>Uji Transaksi Masuk</span>
                  </motion.button>
                </div>
              </div>

              {/* Streaming Live Transaction Feed */}
              <div className="bg-[#15273A]/90 rounded-xl border border-slate-700/80 p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Live Activity Stream (Simulated Bank Feed)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STREAMING
                  </span>
                </div>

                <div className="space-y-1.5">
                  {feedItems.map((feed) => (
                    <motion.div
                      key={feed.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px] font-mono"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[10px]">{feed.time}</span>
                        <span className="text-slate-200 font-semibold">{feed.type}</span>
                        <span className="text-emerald-400 font-bold">{feed.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[10px] hidden sm:inline">{feed.agent}</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[9px] border border-emerald-800">
                          {feed.latency}ms
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: AGENT NETWORK HEALTH */}
          {activeTab === 'network' && (
            <motion.div
              key="network"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="bg-[#15273A] rounded-xl border border-slate-700/80 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    Distribusi Status Jaringan Outlet Agen
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Total Outlet: 1.265</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30">
                    <span className="text-[10px] text-emerald-400 block font-mono">ACTIVE OUTLETS</span>
                    <span className="text-xl font-bold font-mono text-emerald-300">1.248</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">98.6% Sehat</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30">
                    <span className="text-[10px] text-amber-400 block font-mono">PENDING APPROVAL</span>
                    <span className="text-xl font-bold font-mono text-amber-300">14</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Maker-Checker</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-red-500/30">
                    <span className="text-[10px] text-red-400 block font-mono">RESTRICTED</span>
                    <span className="text-xl font-bold font-mono text-red-300">3</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Audit Geofence</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Wilayah Pertumbuhan Tertinggi:</span>
                    <strong className="text-white font-mono">Jawa Barat (420 Outlet)</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Rata-rata Transaksi / Hari:</span>
                    <span className="font-mono text-emerald-400">14.280 Transaksi</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: BACKOFFICE EXCEPTION RESOLUTION */}
          {activeTab === 'backoffice' && (
            <motion.div
              key="backoffice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2.5"
            >
              <div className="bg-[#15273A] rounded-xl border border-slate-700/80 p-3.5 space-y-2.5">
                <span className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    Pengecualian Operasional Terkini (Zero Untracked)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SLA Active</span>
                </span>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/50 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-amber-200 block text-[11px]">
                        UNKNOWN State: TRX-9941 (Timeout PLN)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Idempotency locked · Auto-query status ke Biller Adapter
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700">
                      RESOLVING
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/40 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-blue-200 block text-[11px]">
                        Low Float Alert: Agen Cikajang-02
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Sisa Rp 4.250.000 (&lt; Batas Kritis Rp 10Jt)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700">
                      NOTIFIED
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-emerald-200 block text-[11px]">
                        Persetujuan Maker-Checker (Tier Gold)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Pembaruan limit transaksi oleh Staff Cabang Garut
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700">
                      READY
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Synthetic Demo Label as required by Spec */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 gap-1">
        <span className="italic">
          Illustrative platform workflow · Synthetic demo data
        </span>
        <span className="text-blue-300">
          Stand-alone Architecture Ready
        </span>
      </div>
    </div>
  );
};
