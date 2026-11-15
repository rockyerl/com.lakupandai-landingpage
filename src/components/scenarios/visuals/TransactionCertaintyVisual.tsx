import React, { useState } from 'react';
import { Wifi, WifiOff, RefreshCw, CheckCircle2, QrCode, Lock, ShieldAlert, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TransactionCertaintyVisual: React.FC = () => {
  const [networkMode, setNetworkMode] = useState<'normal' | 'flaky'>('flaky');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [stepState, setStepState] = useState<'idle' | 'unknown' | 'resolved'>('unknown');
  const [qrModalOpen, setQrModalOpen] = useState<boolean>(false);

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
        }, 1500);
      } else {
        setStepState('resolved');
        setIsSimulating(false);
      }
    }, 800);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-4 sm:p-5 shadow-2xl font-sans">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            TRANSACTION ENGINE & UNKNOWN RESOLUTION
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-300">
            IDEMPOTENCY_LOCK: ACTIVE
          </span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="my-3.5 p-3 bg-slate-900/70 rounded-lg border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="space-y-0.5">
          <span className="text-xs font-semibold text-slate-200">
            Uji Kondisi Lapangan:
          </span>
          <p className="text-[10px] sm:text-[11px] text-slate-400">
            Simulasikan apa yang terjadi saat sinyal terputus tepat setelah tombol kirim ditekan.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => triggerSimulation('normal')}
            disabled={isSimulating}
            className={`flex-1 sm:flex-initial px-2.5 py-1.5 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition cursor-pointer ${
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
            className={`flex-1 sm:flex-initial px-2.5 py-1.5 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition cursor-pointer ${
              networkMode === 'flaky'
                ? 'bg-amber-950/80 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/30'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            Putus Pasca-Kirim
          </button>
        </div>
      </div>

      {/* Transaction Lifecycle Steps */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-[#15273A] p-2.5 sm:p-3 rounded border border-slate-700">
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mb-1">01 / DISPATCH</span>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">Setor Tunai Rp 500K</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 truncate">KEY: IDEM-8821-2026</p>
          </div>

          <div className={`p-2.5 sm:p-3 rounded border transition-all ${
            stepState === 'unknown'
              ? 'bg-amber-950/40 border-amber-500/60 ring-1 ring-amber-500/40'
              : 'bg-[#15273A] border-slate-700'
          }`}>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mb-1">02 / INTERMEDIATE</span>
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
            <p className="text-[9px] sm:text-[10px] text-slate-400 mt-1 truncate">
              {stepState === 'unknown' ? 'Cek status core tanpa dobel debet' : 'Idempotensi aman'}
            </p>
          </div>

          <div className={`p-2.5 sm:p-3 rounded border transition-all ${
            stepState === 'resolved'
              ? 'bg-emerald-950/40 border-emerald-500/60'
              : 'bg-[#15273A]/60 border-slate-800'
          }`}>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mb-1">03 / RESULT</span>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${stepState === 'resolved' ? 'text-emerald-300' : 'text-slate-500'}`}>
                {stepState === 'resolved' ? 'CONFIRMED SUCCESS' : 'Awaiting Core'}
              </span>
              {stepState === 'resolved' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 mt-1 truncate">
              {stepState === 'resolved' ? 'Struk QR terverifikasi terbit' : 'Mencegah debet ganda'}
            </p>
          </div>
        </div>

        {/* Digital Receipt Snapshot */}
        <div className="bg-slate-900/90 rounded-lg border border-slate-800 p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-200">
                Bukti Transaksi Digital Resmi
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                QR VERIFIED
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-0.5">
              <p>No. Ref: <span className="text-slate-200">TRX-20261115-0982</span></p>
              <p>Rekening Tujuan: <span className="text-slate-200">•••• •••• 9102 (Bpk. M. Syahrir)</span></p>
              <p>Stempel Waktu Bank: <span className="text-slate-200">2026-11-15 09:14:02 WIB</span></p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setQrModalOpen(true)}
            className="flex items-center gap-2 bg-[#0E1E30] px-3 py-2 rounded-lg border border-slate-700 shrink-0 cursor-pointer hover:border-blue-400 transition"
          >
            <QrCode className="w-8 h-8 text-slate-200" />
            <div className="text-[10px] font-mono text-left">
              <p className="text-slate-200 font-semibold">Tanda Tangan QR</p>
              <p className="text-emerald-400">Verifikasi Struk</p>
            </div>
          </motion.button>
        </div>

        {/* Critical Policy Callout */}
        <div className="bg-amber-950/30 border border-amber-600/30 rounded-lg p-3 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-[10px] sm:text-[11px] leading-relaxed text-amber-200/90">
            <strong className="text-amber-300 font-semibold">Kebijakan Batas Offline:</strong> Transaksi bernilai uang secara default wajib terkoneksi online. Mode offline hanya mencadangkan pengajuan non-uang (pembukaan rekening, keluhan, referral) untuk disinkronkan saat koneksi kembali.
          </div>
        </div>
      </div>

      {/* QR Modal Verification Popup */}
      <AnimatePresence>
        {qrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#15273A] border border-slate-700 p-6 rounded-2xl max-w-sm w-full text-center space-y-4"
            >
              <h4 className="text-sm font-bold text-white">Verifikasi Kriptografis QR Struk</h4>
              <div className="p-4 bg-white rounded-xl inline-block shadow-lg mx-auto">
                <QrCode className="w-32 h-32 text-[#0E1E30]" />
              </div>
              <div className="text-[11px] font-mono text-slate-300 space-y-1">
                <p>Status: <span className="text-emerald-400 font-bold">GENUINE / TERDAFTAR</span></p>
                <p className="truncate text-slate-400">SIG: 0x98ab...f201</p>
                <p className="text-[10px] text-slate-400">Diverifikasi langsung oleh Core Security Key</p>
              </div>
              <button
                onClick={() => setQrModalOpen(false)}
                className="w-full py-2 btn-sundawa-gold text-[#0E1E30] font-bold rounded-lg text-xs cursor-pointer shadow-sm"
              >
                Tutup Pratinjau
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
