import React, { useState } from 'react';
import { GitCompare, ShieldAlert, Check, X, Clock, UserCheck, Lock, FileText } from 'lucide-react';

export const GovernanceDiffVisual: React.FC = () => {
  const [decisionState, setDecisionState] = useState<'pending' | 'approved' | 'rejected'>('pending');

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            VERSIONED CONFIGURATION DIFF & MAKER-CHECKER · DEMO
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 text-[11px] font-mono text-slate-300">
          <Lock className="w-3 h-3 text-amber-400" />
          SEGREGATION OF DUTIES: ENFORCED
        </div>
      </div>

      {/* Change Request Info */}
      <div className="my-3 p-3 bg-slate-900/70 rounded-lg border border-slate-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="space-y-0.5">
          <span className="font-semibold text-slate-200">
            Usulan Perubahan: Penyesuaian Fee Tarik Tunai & Limit Transfer Tier Silver
          </span>
          <p className="text-[11px] text-slate-400 font-mono">
            CR-2026-CFG-109 · Tanggal Efektif Terjadwal: <span className="text-blue-300">17 Nov 2026, 00:00 WIB</span>
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
          v2.4.1 → v2.5.0
        </span>
      </div>

      {/* Side-by-Side Diff */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
        {/* Current Config (Base) */}
        <div className="bg-[#15273A]/90 p-3 rounded-lg border border-slate-700 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-700">
            <span className="font-semibold text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Konfigurasi Aktif (v2.4.1)
            </span>
            <span className="text-[10px] font-mono text-slate-400">ACTIVE PRODUCTION</span>
          </div>

          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
              <span className="text-slate-400 text-[10px] block">Biaya Tarik Tunai:</span>
              Rp 5.000 / transaksi
            </div>
            <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
              <span className="text-slate-400 text-[10px] block">Limit Harian (Tier Silver):</span>
              Rp 10.000.000 / hari
            </div>
            <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
              <span className="text-slate-400 text-[10px] block">Kanal Produk BPJS:</span>
              <span className="text-red-400">DISABLED (Non-aktif)</span>
            </div>
          </div>
        </div>

        {/* Proposed Config (Diff) */}
        <div className="bg-[#15273A]/90 p-3 rounded-lg border border-blue-500/50 space-y-2 ring-1 ring-blue-500/20">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-700">
            <span className="font-semibold text-blue-300 flex items-center gap-1.5">
              <GitCompare className="w-3.5 h-3.5 text-blue-400" />
              Usulan Baru (v2.5.0)
            </span>
            <span className="text-[10px] font-mono text-amber-300">PENDING REVIEW</span>
          </div>

          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
              <span className="text-emerald-400 text-[10px] block">Biaya Tarik Tunai (+Rp 1.500):</span>
              Rp 6.500 / transaksi
            </div>
            <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
              <span className="text-emerald-400 text-[10px] block">Limit Harian (+Rp 5.000.000):</span>
              Rp 15.000.000 / hari
            </div>
            <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
              <span className="text-emerald-400 text-[10px] block">Kanal Produk BPJS:</span>
              <span className="text-emerald-400 font-semibold">ENABLED (Aktif Terjadwal)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Segregation Actors & Decision Action */}
      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-slate-200">
                Maker: Bima Santoso (Product Specialist) · 10:14 WIB
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Checker Independen: <span className="text-amber-300">Diana Wijaya (Risk & Compliance Officer)</span>
            </p>
          </div>

          {decisionState === 'pending' ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDecisionState('rejected')}
                className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer flex items-center gap-1"
              >
                <X className="w-3 h-3 text-red-400" />
                Tolak
              </button>
              <button
                onClick={() => setDecisionState('approved')}
                className="px-3 py-1 text-xs font-medium rounded bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer flex items-center gap-1 shadow-sm"
              >
                <Check className="w-3.5 h-3.5" />
                Setujui dengan Kunci Digital
              </button>
            </div>
          ) : (
            <span className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
              decisionState === 'approved'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-red-500/20 text-red-300 border border-red-500/40'
            }`}>
              {decisionState === 'approved' ? 'DISETUJUI SECARA DIGITAL' : 'DITOLAK DENGAN CATATAN'}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800 gap-1">
          <span>CHAINED_HASH: <code className="text-slate-300">0x8a92f0...c4e1</code></span>
          <span>AUDIT_LOG: IMMUTABLE & NON-REPUDIABLE</span>
        </div>
      </div>
    </div>
  );
};
