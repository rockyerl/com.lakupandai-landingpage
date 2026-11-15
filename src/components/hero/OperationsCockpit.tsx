import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Users, ArrowRight, AlertTriangle, Clock, Server, CheckCircle2, ChevronRight } from 'lucide-react';

export const OperationsCockpit: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'network' | 'flow' | 'backoffice'>('flow');

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0E1E30] rounded-2xl border border-slate-700/80 shadow-2xl p-5 sm:p-6 text-white font-sans relative overflow-hidden backdrop-blur-xl">
      {/* Top Cockpit Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-300">
              OPERATIONS OVERVIEW · DEMO COCKPIT
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>LATENCY: <strong className="text-emerald-400 font-semibold">18ms</strong></span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-300">DC-PRIMARY ACTIVE</span>
        </div>
      </div>

      {/* Tab Switcher for Mobile / Compact View */}
      <div className="grid grid-cols-3 gap-1.5 my-3.5 bg-slate-900/70 p-1 rounded-lg border border-slate-800 text-xs">
        <button
          onClick={() => setActiveTab('network')}
          className={`py-1.5 rounded-md font-medium transition cursor-pointer ${
            activeTab === 'network' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          01. Agent Network
        </button>
        <button
          onClick={() => setActiveTab('flow')}
          className={`py-1.5 rounded-md font-medium transition cursor-pointer ${
            activeTab === 'flow' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          02. Engine Flow
        </button>
        <button
          onClick={() => setActiveTab('backoffice')}
          className={`py-1.5 rounded-md font-medium transition cursor-pointer ${
            activeTab === 'backoffice' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          03. Backoffice Ops
        </button>
      </div>

      {/* 3 Panels Display */}
      <div className="space-y-4">
        {/* Panel 1: Agent Network Summary */}
        {(activeTab === 'network' || activeTab === 'flow') && (
          <div className="bg-[#15273A]/90 rounded-xl border border-slate-700/70 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                Status Jaringan Outlet Agen
              </span>
              <span className="text-[10px] font-mono text-slate-400">Total Outlet: 1.265</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-emerald-500/30">
                <span className="text-[10px] text-emerald-400 block font-mono">ACTIVE OUTLETS</span>
                <span className="text-base font-bold font-mono text-emerald-300">1.248</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-amber-500/30">
                <span className="text-[10px] text-amber-400 block font-mono">PENDING APPROVAL</span>
                <span className="text-base font-bold font-mono text-amber-300">14</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-red-500/30">
                <span className="text-[10px] text-red-400 block font-mono">RESTRICTED / SUSPEND</span>
                <span className="text-base font-bold font-mono text-red-300">3</span>
              </div>
            </div>
          </div>
        )}

        {/* Panel 2: Live Transaction Flow Architecture */}
        {(activeTab === 'flow') && (
          <div className="bg-slate-900/80 rounded-xl border border-blue-500/30 p-3.5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                Live Pipeline: Agen ↔ Core Banking Bank
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/40">
                IDEMPOTENCY_ACTIVE
              </span>
            </div>

            {/* Pipeline Visual Diagram */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className={`p-2.5 rounded-lg border text-center transition-all ${
                pulseIndex === 0 ? 'bg-blue-900/50 border-blue-400 ring-1 ring-blue-400/50' : 'bg-[#15273A] border-slate-700'
              }`}>
                <span className="text-[10px] font-mono text-slate-400 block">Kanal Lapangan</span>
                <span className="font-semibold text-slate-200 text-xs">Agent App</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Device Key Signed</span>
              </div>

              <div className={`p-2.5 rounded-lg border text-center transition-all ${
                pulseIndex === 1 || pulseIndex === 2 ? 'bg-blue-900/50 border-blue-400 ring-1 ring-blue-400/50' : 'bg-[#15273A] border-slate-700'
              }`}>
                <span className="text-[10px] font-mono text-blue-300 block">Gateway & Engine</span>
                <span className="font-semibold text-white text-xs">Transaction Engine</span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">Audit Hash Stamp</span>
              </div>

              <div className={`p-2.5 rounded-lg border text-center transition-all ${
                pulseIndex === 3 ? 'bg-emerald-900/50 border-emerald-400 ring-1 ring-emerald-400/50' : 'bg-[#15273A] border-slate-700'
              }`}>
                <span className="text-[10px] font-mono text-slate-400 block">Sistem Inti Bank</span>
                <span className="font-semibold text-slate-200 text-xs">Core Adapter</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">ISO 8583 / REST</span>
              </div>
            </div>
          </div>
        )}

        {/* Panel 3: Operations Queue View */}
        {(activeTab === 'backoffice' || activeTab === 'flow') && (
          <div className="bg-[#15273A]/90 rounded-xl border border-slate-700/70 p-3.5 space-y-2">
            <span className="text-xs font-semibold text-slate-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Antrean Operasional Backoffice Terkini
              </span>
              <span className="text-[10px] font-mono text-slate-400">Real-time Feed</span>
            </span>

            <div className="space-y-1.5 text-xs font-sans">
              <div className="p-2 rounded-lg bg-slate-900/70 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <div>
                    <span className="font-medium text-slate-200 block text-[11px]">
                      Pending UNKNOWN Resolution
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      TRX-9941 (Timeout Biller PLN) · Mencocokkan status bank
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-300 px-1.5 py-0.5 rounded bg-amber-950">
                  AUTO-SYNC
                </span>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <div>
                    <span className="font-medium text-slate-200 block text-[11px]">
                      Low Float Alert: Agen Cikajang-02
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Sisa Rp 4.250.000 (Mendekati ambang Rp 10Jt)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-blue-300 px-1.5 py-0.5 rounded bg-blue-950">
                  TOP-UP NOTIFIED
                </span>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <div>
                    <span className="font-medium text-slate-200 block text-[11px]">
                      Maker-Checker Approval Queue
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Pembaruan limit tier agen gold oleh Branch Staff
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 px-1.5 py-0.5 rounded bg-emerald-950">
                  1 AWAITING
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Synthetic Demo Label as required by Spec */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <span className="text-slate-400 italic">
          Illustrative platform workflow · Synthetic demo data
        </span>
        <span className="text-blue-300">
          Stand-alone Architecture Ready
        </span>
      </div>
    </div>
  );
};
