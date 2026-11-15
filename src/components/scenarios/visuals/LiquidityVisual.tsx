import React, { useState } from 'react';
import { Wallet, AlertTriangle, ArrowUpRight, CheckCircle2, Scale, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LiquidityVisual: React.FC = () => {
  const [floatBalance, setFloatBalance] = useState<number>(8500000);
  const [isTopUpRequested, setIsTopUpRequested] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const threshold = 10000000;
  const isLowFloat = floatBalance < threshold;

  const handleRequestTopUp = () => {
    setIsTopUpRequested(true);
    setIsApproved(false);
    setTimeout(() => {
      setIsApproved(true);
      setFloatBalance(25000000);
      setTimeout(() => {
        setIsTopUpRequested(false);
      }, 1200);
    }, 1500);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-4 sm:p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            AGENT FLOAT & CASH CLOSE MONITOR · DEMO
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          OUTLET: TOKO MAJU JAYA (#AG-7712)
        </div>
      </div>

      {/* Float Balance Bar & Status */}
      <div className="my-3.5 bg-[#15273A] rounded-lg border border-slate-700 p-3.5 sm:p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5 text-blue-400" />
              Posisi Saldo Float Kas Agen
            </span>
            <div className="text-lg sm:text-2xl font-bold font-mono text-slate-100 flex items-center gap-2">
              Rp {floatBalance.toLocaleString('id-ID')}
            </div>
          </div>

          <div className="text-right">
            <AnimatePresence mode="wait">
              <motion.span
                key={isLowFloat ? 'low' : 'healthy'}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium ${
                  isLowFloat
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse ring-1 ring-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {isLowFloat ? (
                  <>
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    LOW FLOAT ALERT (&lt; Rp 10Jt)
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    FLOAT HEALTHY
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Slider to simulate float usage */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-slate-400">
            <span>Uji Tarik Tunai Lapangan (Geser Saldo):</span>
            <span className="text-slate-300">{Math.round((floatBalance / 30000000) * 100)}% Saldo</span>
          </div>
          <input
            type="range"
            min="2000000"
            max="30000000"
            step="500000"
            value={floatBalance}
            onChange={(e) => setFloatBalance(Number(e.target.value))}
            className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
            <span className="text-amber-400 font-semibold">Batas Kritis: Rp 10.000.000</span>
            <span>Maksimal: Rp 30.000.000</span>
          </div>
        </div>

        {/* Quick Simulator Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-700/80">
          <div className="flex gap-1.5">
            <button
              onClick={() => setFloatBalance(4500000)}
              className="text-[10px] sm:text-[11px] font-mono bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded border border-slate-700 cursor-pointer text-slate-300 active:scale-95 transition"
            >
              Simulasi Lonjakan Tarik Tunai
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleRequestTopUp}
            disabled={isTopUpRequested}
            className={`text-[11px] font-medium px-3 py-1.5 rounded transition shadow-sm flex items-center gap-1.5 cursor-pointer ${
              isApproved
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isTopUpRequested ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Otorisasi Cabang...</span>
              </>
            ) : isApproved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Top-Up Rp 25Jt Disetujui!</span>
              </>
            ) : (
              <>
                <span>Ajukan Top-Up Likuiditas</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* End of Day Cash Close & Variance Flag */}
      <div className="bg-slate-900/90 rounded-lg border border-slate-800 p-3 sm:p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-amber-400" />
            Daily Cash Close & Variance Audit (Penutupan Kas Fisik)
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-semibold">
            VARIANCE FLAGGED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-slate-950 p-2 sm:p-2.5 rounded border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Kas Fisik Sistem</span>
            <span className="font-mono font-semibold text-slate-200">Rp 18.500.000</span>
          </div>

          <div className="bg-slate-950 p-2 sm:p-2.5 rounded border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Deklarasi Agen</span>
            <span className="font-mono font-semibold text-amber-300">Rp 18.350.000</span>
          </div>

          <div className="bg-slate-950 p-2 sm:p-2.5 rounded border border-red-900/40">
            <span className="text-[10px] text-red-300 block">Selisih Kas (Variance)</span>
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
