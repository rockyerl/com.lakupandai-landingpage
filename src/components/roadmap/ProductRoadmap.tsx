import React from 'react';
import { Layers, CheckCircle2, Clock, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export const ProductRoadmap: React.FC = () => {
  const mvm1Capabilities = [
    'Agent Identity, Onboarding & Outlet Lifecycle',
    'Cryptographic Device Binding & PIN Auth',
    'Core Financial Transactions (Setor, Tarik, Transfer)',
    'Native API PPOB Smart Routing & Markup Engine',
    'Tamper-evident Receipt dengan QR Verifikasi',
    'Agent Liquidity & Float Threshold Monitoring',
    'Configurable Fees & Transaction Limits (Versioned)',
    'Idempotency Guard & UNKNOWN Resolution',
    'Daily Automated 4-Way Reconciliation',
    'Maker-Checker Approval Engine Berjenjang',
    'Immutable Hash-Chained Audit Trail',
    'On-Premise Deployment RHEL 9 (DC / DRC Design)'
  ];

  const mvm2Planned = [
    'Dispute Case Engine & Automated SLA Escalation',
    'Automated Fraud Monitoring & Anomaly Rule Alerts',
    'Supervisor Geospatial Live Map & Density Analytics',
    'Enhanced Assisted e-KYC Biometric Onboarding',
    'Granular Branch Performance & Predictive Float Needs',
    'Centralized In-App Push & Agent Broadcast Management',
    'Agent Loyalty, Tier Progression & Referral Point Engine'
  ];

  const separateEngagements = [
    'Integrasi QRIS Dinamis & Statis (MPM / CPM)',
    'Integrasi Terminal EDC Proprietary & Perangkat MPOS',
    'Dukungan Kartu Uang Elektronik Chip / NFC (Top-Up & Update Balance)',
    'Aplikasi Native Khusus Platform (Pure Kotlin / Swift Native)',
    'SDK Agent Banking untuk Disematkan ke Super-App Bank Eksisting',
    'Integrasi Protokol Khusus Bantuan Sosial / Program Pemerintah'
  ];

  return (
    <section className="py-24 bg-white text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            PLANNED PRODUCT EVOLUTION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Fondasi operasional lebih dulu. Inteligensi dan pengawasan lanjut setelahnya.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Pengembangan produk dibagi secara transparan antara <strong className="text-[#0E1E30]">MVM-1</strong> sebagai fondasi operasional inti, <strong className="text-[#0E1E30]">MVM-2</strong> sebagai pengayaan lanjutan, serta lingkup integrasi kustom berbayar.
          </p>
        </div>

        {/* 3 Columns Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: MVM-1 (Base Foundation) */}
          <div className="bg-[#F8F8F8] rounded-2xl border-2 border-[#0056AA] p-7 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 btn-sundawa-gold text-[#0E1E30] text-[10px] font-mono uppercase px-3.5 py-1 rounded-bl-lg font-bold shadow-xs">
              CORE FOUNDATION (MVM-1)
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-blue-700 font-bold block mb-1">
                  FASE 1 / MVM-1
                </span>
                <h3 className="text-xl font-bold text-[#0E1E30]">
                  Fondasi Operasional Inti
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Cakupan utama untuk pengoperasian, pengendalian transaksi, dan integrasi dasar bank.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <ul className="space-y-2.5">
                  {mvm1Capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-blue-800 font-semibold">
              Status: Validated Base Target
            </div>
          </div>

          {/* Column 2: MVM-2 (Planned Enhancements) */}
          <div className="bg-[#F8F9FB] rounded-2xl border border-amber-300 p-7 shadow-xs flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-mono uppercase px-3 py-1 rounded-bl-lg font-bold">
              PLANNED ROADMAP
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-amber-700 font-bold block mb-1">
                  FASE 2 / MVM-2
                </span>
                <h3 className="text-xl font-bold text-[#0E1E30]">
                  Pengayaan & Otomasi Lanjutan
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Kapabilitas inteligensi data, penanganan dispute otomatis, dan visualisasi supervisi spasial.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <ul className="space-y-2.5">
                  {mvm2Planned.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-amber-700 font-semibold">
              Label: Subject to Verified Release
            </div>
          </div>

          {/* Column 3: Separate Paid Engagements */}
          <div className="bg-[#F8F9FB] rounded-2xl border border-slate-200 p-7 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-500 font-bold block mb-1">
                  CUSTOM ENGAGEMENT
                </span>
                <h3 className="text-xl font-bold text-[#0E1E30]">
                  Cakupan Khusus Berbayar
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Layanan perangkat keras dan kustomisasi platform yang memerlukan dependensi vendor pihak ketiga.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <ul className="space-y-2.5">
                  {separateEngagements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                      <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
              Model: Custom Scope & Infrastructure Readiness
            </div>
          </div>
        </div>

        {/* Procurement Safety Rule */}
        <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600 font-mono leading-relaxed">
            <strong>Integritas Spesifikasi:</strong> Seluruh kapabilitas MVM-2 dilabeli secara jujur sebagai roadmap terjadwal, bukan fitur live tanpa verifikasi build rilis aktual.
          </p>
        </div>
      </div>
    </section>
  );
};
