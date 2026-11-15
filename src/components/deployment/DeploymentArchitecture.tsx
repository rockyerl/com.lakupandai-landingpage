import React, { useState } from 'react';
import { Server, Database, Shield, Radio, CheckCircle2, ArrowRight, RefreshCw, Cpu, Layers, HardDrive } from 'lucide-react';

export const DeploymentArchitecture: React.FC = () => {
  const [activeSite, setActiveSite] = useState<'DC' | 'DRC'>('DC');

  return (
    <section id="teknologi-integrasi" className="py-24 bg-[#0E1E30] text-white border-b border-slate-800 font-sans relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5 text-blue-400" />
            DESIGNED FOR BANK IT ENVIRONMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Dirancang untuk ditempatkan dalam kendali infrastruktur bank.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pendekatan produk adalah <strong className="text-white">on-premise</strong>, dengan layanan platform yang berjalan pada data center bank dan integrasi melalui konektor terisolasi ke ekosistem eksisting.
          </p>
        </div>

        {/* Interactive Site Controller & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Architecture Visual Topology Box (7 Cols) */}
          <div className="lg:col-span-7 bg-[#15273A] rounded-2xl border border-slate-700/80 p-6 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-200">
                  TOPOLOGI ARSITEKTUR ON-PREMISE (CONTAINERIZED)
                </span>
              </div>

              {/* DC / DRC Site Switcher */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs font-mono">
                <button
                  onClick={() => setActiveSite('DC')}
                  className={`px-3 py-1 rounded cursor-pointer transition ${
                    activeSite === 'DC' ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Primary Data Center (DC)
                </button>
                <button
                  onClick={() => setActiveSite('DRC')}
                  className={`px-3 py-1 rounded cursor-pointer transition ${
                    activeSite === 'DRC' ? 'bg-amber-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Disaster Recovery (DRC)
                </button>
              </div>
            </div>

            {/* Architecture Flow Representation */}
            <div className="space-y-4 text-xs font-sans">
              {/* Clients Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <span className="font-mono text-[10px] text-blue-400 block mb-0.5">Kanal Lapangan</span>
                  <span className="font-semibold text-slate-200 text-xs">Agent Mobile App (Flutter)</span>
                  <p className="text-[10px] text-slate-400 mt-1">mTLS / Request Signature</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <span className="font-mono text-[10px] text-blue-400 block mb-0.5">Kanal Backoffice</span>
                  <span className="font-semibold text-slate-200 text-xs">Bank Operations Portal</span>
                  <p className="text-[10px] text-slate-400 mt-1">SSO / RBAC / Maker-Checker</p>
                </div>
              </div>

              {/* API Gateway & Security Barrier */}
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/50 text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-blue-300 font-semibold font-mono text-xs">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  API GATEWAY & SECURE INGRESS CONTROLLER
                </div>
                <p className="text-[11px] text-slate-300">
                  Rate limiting, payload sanitation, signature validation, correlation trace ID injection
                </p>
              </div>

              {/* Core Platform Container Cluster */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-600 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-mono text-[11px] text-slate-300 font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    Agent Banking Engine Cluster (RHEL 9 / Containerized)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {activeSite === 'DC' ? 'ACTIVE CLUSTER' : 'HOT STANDBY CLUSTER'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#0E1E30] border border-slate-800">
                    Transaction Core
                  </div>
                  <div className="p-2 rounded bg-[#0E1E30] border border-slate-800">
                    Approval Engine
                  </div>
                  <div className="p-2 rounded bg-[#0E1E30] border border-slate-800">
                    Reconciliation
                  </div>
                  <div className="p-2 rounded bg-[#0E1E30] border border-slate-800">
                    Liquidity / Float
                  </div>
                </div>
              </div>

              {/* Connector Layer to Bank Core */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <span className="font-mono text-[10px] text-slate-400 block">Core Adapter</span>
                  <span className="font-semibold text-slate-200 text-xs">Bank Core System</span>
                  <span className="text-[10px] font-mono text-emerald-400 block mt-0.5">ISO 8583 / REST</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <span className="font-mono text-[10px] text-slate-400 block">Supplier Router</span>
                  <span className="font-semibold text-slate-200 text-xs">PPOB Aggregators</span>
                  <span className="text-[10px] font-mono text-blue-400 block mt-0.5">Multi-Biller Failover</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <span className="font-mono text-[10px] text-slate-400 block">Identity / Gov</span>
                  <span className="font-semibold text-slate-200 text-xs">Bank IAM / e-KYC</span>
                  <span className="text-[10px] font-mono text-amber-400 block mt-0.5">OAuth2 / SAML</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
              <span>RHEL 9 Podman/Docker / K8s / OpenShift Ready</span>
              <span className="text-emerald-400">Isolated Audit Ledger Storage</span>
            </div>
          </div>

          {/* Right Highlights Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#15273A]/80 rounded-2xl border border-slate-700 p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-blue-400" />
                Spesifikasi Deployment Enterprise
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-semibold">Deployment On-Premise Penuh</strong>
                  <p className="leading-relaxed text-slate-400">
                    Berjalan di data center bank, mendukung konfigurasi active-standby DC dan DRC dengan replikasi data asinkronus/sinkronus sesuai RPO/RTO bank.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-semibold">Connector-Based Modular Integration</strong>
                  <p className="leading-relaxed text-slate-400">
                    Memisahkan logika bisnis agen dari protokol proprietary bank (ISO 8583, ISO 20022, JSON API, SOAP).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-semibold">Standalone Demo vs Integrated Mode</strong>
                  <p className="leading-relaxed text-slate-400">
                    Sesi evaluasi dapat menggunakan mock connector berlabel untuk pengujian alur bisnis, dilanjutkan implementasi adapter teruji saat integrasi sistem.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-semibold">ELK-Ready Observability</strong>
                  <p className="leading-relaxed text-slate-400">
                    Format log JSON terstruktur dengan trace ID unik untuk investigasi audit cepat dan integrasi SIEM bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Crucial Push Notification Architecture Note from Spec */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              <span className="text-slate-300 font-semibold block">
                Catatan Arsitektur Push Notification:
              </span>
              <p className="text-[11px] leading-relaxed">
                Infrastruktur push notification mobile pihak ketiga (FCM) hanya difungsikan sebagai sinyal bangun (fetch signal). Tidak ada payload data nasabah atau detail finansial yang dikirimkan melalui jaringan notifikasi eksternal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
