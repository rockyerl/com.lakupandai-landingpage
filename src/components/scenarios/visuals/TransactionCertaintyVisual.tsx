import React, { useState } from 'react';
import { Wifi, WifiOff, RefreshCw, CheckCircle2, AlertCircle, QrCode, Lock, ShieldAlert } from 'lucide-react';

export const TransactionCertaintyVisual: React.FC = () => {
  const [networkMode, setNetworkMode] = useState<'normal' | 'flaky'>('flaky');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [stepState, setStepState] = useState<'idle' | 'unknown' | 'resolved'>('unknown');

  const triggerSimulation = (mode: 'normal' | 'flaky') => {
    setNetworkMode(mode);
    setIsSimulating(true);
    setStepState('idle');

    setTimeout(() => {
      if (mode === 'flaky') {
        setStepState('unknown');
        setTimeout(() => {
          setStepState('resolved');
          setIsSimulating(false);
        }, 1800);
      } else {
        setStepState('resolved');
        setIsSimulating(false);
      }
    }, 900);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-5 shadow-2xl font-sans">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            TRANSACTION ENGINE & UNKNOWN RESOLUTION
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="text-[11px] font-mono text-slate-300">
            IDEMPOTENCY_LOCK: ACTIVE
          </span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="my-4 p-3 bg-slate-900/60 rounded-lg border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-xs font-semibold text-slate-200">
            Simulasi Kondisi Lapangan:
          </span>
          <p className="text-[11px] text-slate-400">
            Uji bagaimana engine merespons saat koneksi terputus setelah tombol kirim ditekan.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => triggerSimulation('normal')}
            disabled={isSimulating}
            className={`px-2.5 py-1.5 rounded text-xs font-medium border flex items-center gap-1.5 transition cursor-pointer ${
              networkMode === 'normal'
                ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            Jaringan Normal
          </button>
          <button
            onClick={() => triggerSimulation('flaky')}
            disabled={isSimulating}
            className={`px-2.5 py-1.5 rounded text-xs font-medium border flex items-center gap-1.5 transition cursor-pointer ${
              networkMode === 'flaky'
                ? 'bg-amber-950/80 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/30'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            Koneksi Putus Pasca-Kirim
          </button>
        </div>
      </div>

      {/* Transaction Lifecycle Display */}
      <div className="space-y-3">
        {/* Pipeline steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-[#15273A] p-3 rounded border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">01 / DISPATCH</span>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">Setor Tunai Rp 500.000</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">IDEM-KEY: 994a-81bc-2026</p>
          </div>

          <div className={`p-3 rounded border transition-all ${
            stepState === 'unknown'
              ? 'bg-amber-950/40 border-amber-500/60 ring-1 ring-amber-500/30'
              : 'bg-[#15273A] border-slate-700'
          }`}>
            <span className="text-[10px] font-mono text-slate-400 block mb-1">02 / INTERMEDIATE STATE</span>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${stepState === 'unknown' ? 'text-amber-300' : 'text-slate-200'}`}>
                {stepState === 'unknown' ? 'Status: UNKNOWN' : 'Core Sync Checked'}
              </span>
              {stepState === 'unknown' ? (
                <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              {stepState === 'unknown' ? 'Menunggu kepastian adapter core' : 'Idempotensi terjaga'}
            </p>
          </div>

          <div className={`p-3 rounded border transition-all ${
            stepState === 'resolved'
              ? 'bg-emerald-950/40 border-emerald-500/60'
              : 'bg-[#15273A]/60 border-slate-800'
          }`}>
            <span className="text-[10px] font-mono text-slate-400 block mb-1">03 / DEFINITIVE RESULT</span>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${stepState === 'resolved' ? 'text-emerald-300' : 'text-slate-500'}`}>
                {stepState === 'resolved' ? 'CONFIRMED SUCCESS' : 'Awaiting Resolution'}
              </span>
              {stepState === 'resolved' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              {stepState === 'resolved' ? 'Struk QR terverifikasi terbit' : 'Mencegah debet ganda'}
            </p>
          </div>
        </div>

        {/* Digital Receipt Snapshot */}
        <div className="bg-slate-900/90 rounded-lg border border-slate-800 p-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-200">
                Bukti Transaksi Digital Resmi
              </span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                QR VERIFIED
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono space-y-0.5">
              <p>No. Ref: <span className="text-slate-200">TRX-20261115-0982</span></p>
              <p>Rekening Tujuan: <span className="text-slate-200">•••• •••• 9102 (Bpk. M. Syahrir)</span></p>
              <p>Stempel Waktu Bank: <span className="text-slate-200">2026-11-15 09:14:02 WIB</span></p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0E1E30] px-3 py-2 rounded border border-slate-700 shrink-0">
            <QrCode className="w-10 h-10 text-slate-200" />
            <div className="text-[10px] font-mono text-slate-400">
              <p className="text-slate-200 font-semibold">Tanda Tangan QR</p>
              <p>HMAC-SHA256</p>
              <p className="text-emerald-400">Anti-Tampering</p>
            </div>
          </div>
        </div>

        {/* Critical Policy Callout */}
        <div className="bg-amber-950/30 border border-amber-600/30 rounded-lg p-3 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed text-amber-200/90">
            <strong className="text-amber-300 font-semibold">Kebijakan Batas Offline:</strong> Transaksi bernilai uang secara default wajib terkoneksi online. Mode offline hanya mencadangkan pengajuan non-keuangan (pembukaan rekening, keluhan, referral) untuk disinkronkan saat koneksi kembali.
          </div>
        </div>
      </div>
    </div>
  );
};
