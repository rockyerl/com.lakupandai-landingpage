import React, { useState } from 'react';
import { Wallet, AlertTriangle, ArrowUpRight, CheckCircle2, DollarSign, Scale } from 'lucide-react';

export const LiquidityVisual: React.FC = () => {
  const [floatBalance, setFloatBalance] = useState<number>(8500000);
  const [isTopUpRequested, setIsTopUpRequested] = useState<boolean>(false);
  const threshold = 10000000;
  const isLowFloat = floatBalance < threshold;

  const handleRequestTopUp = () => {
    setIsTopUpRequested(true);
    setTimeout(() => {
      setFloatBalance(25000000);
      setIsTopUpRequested(false);
    }, 1500);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            AGENT FLOAT & CASH CLOSE MONITOR · DEMO
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          OUTLET: TOKO MAJU JAYA (#AG-7712)
        </div>
      </div>

      {/* Float Balance Bar & Status */}
      <div className="my-4 bg-[#15273A] rounded-lg border border-slate-700 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5 text-blue-400" />
              Posisi Saldo Float Agen
            </span>
            <div className="text-xl font-bold font-mono text-slate-100">
              Rp {floatBalance.toLocaleString('id-ID')}
            </div>
          </div>

          <div className="text-right">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium ${
              isLowFloat
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}>
              {isLowFloat ? (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  LOW FLOAT ALERT (&lt; Rp 10Jt)
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  FLOAT POSITION HEALTHY
                </>
              )}
            </span>
          </div>
        </div>

        {/* Progress gauge */}
        <div className="space-y-1">
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isLowFloat ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(100, (floatBalance / 30000000) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>Batas Kritis: Rp 10.000.000</span>
            <span>Kapasitas Plafon: Rp 30.000.000</span>
          </div>
        </div>

        {/* Action simulator */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-700/80">
          <div className="flex gap-1.5">
            <button
              onClick={() => setFloatBalance(prev => Math.max(2000000, prev - 4000000))}
              className="text-[11px] font-mono bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 cursor-pointer text-slate-300"
            >
              - Simulasikan Tarik Tunai Ramai
            </button>
          </div>

          <button
            onClick={handleRequestTopUp}
            disabled={isTopUpRequested}
            className="text-[11px] font-medium bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded transition shadow-sm flex items-center gap-1 cursor-pointer"
          >
            {isTopUpRequested ? 'Memproses Otorisasi Bank...' : 'Ajukan Top-Up Likuiditas'}
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* End of Day Cash Close & Variance Flag */}
      <div className="bg-slate-900/90 rounded-lg border border-slate-800 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-amber-400" />
            Daily Cash Close & Variance Audit (Penutupan Kas Fisik)
          </span>
          <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30">
            VARIANCE FLAGGED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-slate-950 p-2 rounded border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Kas Fisik Berdasarkan Sistem</span>
            <span className="font-mono font-semibold text-slate-200">Rp 18.500.000</span>
          </div>

          <div className="bg-slate-950 p-2 rounded border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Kas Dideklarasikan Agen</span>
            <span className="font-mono font-semibold text-amber-300">Rp 18.350.000</span>
          </div>

          <div className="bg-slate-950 p-2 rounded border border-red-900/40">
            <span className="text-[10px] text-red-300 block">Selisih Kas Fisik (Variance)</span>
            <span className="font-mono font-semibold text-red-400">- Rp 150.000</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 italic">
          Selisih kas fisik tercatat dalam audit log harian dan diantrekan untuk verifikasi supervisor cabang saat penyetoran kas ke bank.
        </p>
      </div>
    </div>
  );
};
