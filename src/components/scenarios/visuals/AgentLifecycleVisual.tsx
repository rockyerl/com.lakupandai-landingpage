import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Smartphone, UserCheck, AlertTriangle, ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  label: string;
  status: 'completed' | 'in_progress' | 'pending';
  timestamp: string;
  actor: string;
}

export const AgentLifecycleVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const stages: Stage[] = [
    {
      id: 'submission',
      label: 'Registrasi Outlet & Dokumen',
      status: 'completed',
      timestamp: '08:14 WIB',
      actor: 'Agen Lapangan (Mobile App)'
    },
    {
      id: 'geotag',
      label: 'Validasi Geotag & Perangkat',
      status: 'completed',
      timestamp: '08:29 WIB',
      actor: 'Sistem Integritas Otomatis'
    },
    {
      id: 'maker_checker',
      label: 'Persetujuan Maker-Checker Bank',
      status: 'in_progress',
      timestamp: 'Menunggu Persetujuan',
      actor: 'Supervisor Cabang & Compliance'
    },
    {
      id: 'activation',
      label: 'Aktivasi Kunci Kriptografi Outlet',
      status: 'pending',
      timestamp: 'Tahap Akhir',
      actor: 'Core Key Manager'
    }
  ];

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-5 shadow-2xl overflow-hidden font-sans">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            AGENT ONBOARDING PIPELINE · DEMO
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-700/50">
            ID: AG-2026-GARUT-084
          </span>
          <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-medium">
            MVM-1 BASE
          </span>
        </div>
      </div>

      {/* Stepper Progress */}
      <div className="grid grid-cols-4 gap-2 my-5">
        {stages.map((stage, idx) => {
          const isSelected = activeStep === idx;
          const isDone = idx < 2;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-900/40 border-blue-400/80 shadow-md ring-1 ring-blue-400/30'
                  : isDone
                  ? 'bg-slate-900/40 border-emerald-500/30 hover:bg-slate-800/40'
                  : 'bg-slate-900/20 border-slate-800 hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : idx === 2 ? (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                )}
              </div>
              <p className="text-[11px] font-medium text-slate-200 line-clamp-1 leading-snug">
                {stage.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Inspection Card based on Step */}
      <div className="bg-[#15273A]/90 rounded-lg border border-slate-700/80 p-4 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <h4 className="text-sm font-semibold text-slate-100">
              Profil Agen: Toko Sinar Rejeki (Hendra Gunawan)
            </h4>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Kec. Cikajang, Kab. Garut
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Geotag Outlet
              </span>
              <span className="font-mono text-emerald-400 font-semibold text-[11px]">
                WITHIN_ZONE
              </span>
            </div>
            <p className="font-mono text-slate-200 text-[11px]">
              -7.324542, 107.821109 (Radius 15m)
            </p>
            <p className="text-[10px] text-slate-400">
              Kesesuaian alamat fisik outlet terverifikasi via GPS & WiFi BSSID.
            </p>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                Device Cryptographic Key
              </span>
              <span className="font-mono text-blue-300 font-semibold text-[11px]">
                HARDWARE_BOUND
              </span>
            </div>
            <p className="font-mono text-slate-300 text-[10px] truncate">
              PUBKEY: 04a29c78...f810ebc2
            </p>
            <p className="text-[10px] text-slate-400">
              Sertifikat unik disimpan pada Android Keystore/Secure Enclave.
            </p>
          </div>
        </div>

        {/* Maker Checker State */}
        <div className="bg-slate-900/80 p-3 rounded border border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-slate-200">
                Persetujuan Kewenangan (Maker-Checker)
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Maker: <span className="text-slate-200">Siti Aisyah (Staff Cabang Garut)</span> · 
              Checker Tertunjuk: <span className="text-slate-200">R. Pratama (Branch Ops Head)</span>
            </p>
          </div>
          <button className="text-[11px] font-medium bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded transition shadow-sm flex items-center gap-1">
            Simulasi Setujui
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
          <span>Audit Hash: <code className="text-slate-300 font-mono">0x7d3e...9a41</code></span>
          <span className="italic text-slate-400">Data sintetis demonstrasi platform</span>
        </div>
      </div>
    </div>
  );
};
