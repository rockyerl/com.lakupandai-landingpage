import React from 'react';
import { Compass, Play, FileCheck, GitMerge, Rocket, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ImplementationTimelineProps {
  onOpenDemo: (prefilledFocus?: string) => void;
}

export const ImplementationTimeline: React.FC<ImplementationTimelineProps> = ({ onOpenDemo }) => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Penyelarasan Target & Kebijakan',
      icon: Compass,
      description: 'Menyamakan target ekspansi bisnis, persona pengguna, yurisdiksi kanal, kebijakan risiko, dan alur operasional perbankan yang ada.',
      deliverables: ['Use Case Matrix', 'Risk & Hierarchy Mapping', 'Preliminary Scope Document']
    },
    {
      num: '02',
      title: 'Demonstrate',
      tagline: 'Walkthrough Lingkungan Standalone',
      icon: Play,
      description: 'Sesi evaluasi mendalam menggunakan data sintetis dan konektor mock berlabel jelas, memastikan kecocokan alur bisnis sebelum integrasi teknis.',
      deliverables: ['Executive Demo Walkthrough', 'Backoffice Simulation', 'Operational Fit Gap Assessment']
    },
    {
      num: '03',
      title: 'Define',
      tagline: 'Pemetaan Gap & Kriteria Penerimaan',
      icon: FileCheck,
      description: 'Memetakan spesifikasi teknis ke Core Banking (ISO 8583/REST), switching, IAM/SSO, e-KYC, dan pemasok; menyepakati acceptance criteria resmi.',
      deliverables: ['Integration Interface Spec', 'SIT/UAT Test Scenarios', 'Security & Compliance Blueprint']
    },
    {
      num: '04',
      title: 'Integrate & Validate',
      tagline: 'Pembangunan Konektor & Validasi Ketat',
      icon: GitMerge,
      description: 'Implementasi adapter sistem inti, uji integrasi SIT/UAT bersama tim IT bank, uji penetrasi keamanan (pentest), dan simulasi failover DC/DRC.',
      deliverables: ['Core Adapter Deployment', 'Signed UAT Report', 'Penetration Test Clearance']
    },
    {
      num: '05',
      title: 'Roll Out',
      tagline: 'Pilot Terukur & Ekspansi Bertahap',
      icon: Rocket,
      description: 'Peluncuran bertahap melalui program pilot terkontrol di wilayah percontohan, evaluasi metrik operasional, dan perluasan ke jaringan agen nasional.',
      deliverables: ['Pilot Performance Evaluation', 'Branch Operations Playbook', 'Phased Rollout Authorization']
    }
  ];

  return (
    <section id="implementasi" className="py-24 bg-[#F8F9FB] text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            A CONTROLLED PATH TO IMPLEMENTATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Mulai dari skenario bank, bukan dari daftar modul.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Setiap institusi perbankan memiliki core system, tata kelola, produk, dan proses approval yang berbeda. Karena itu, pembahasan dimulai dari skenario operasional dan kebutuhan integrasi nyata.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-[#DCE3EB] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-blue-700">
                      STEP {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E1E30]">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 block mb-2 font-medium">
                    {step.tagline}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    Target Deliverable:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-700 font-mono">
                    {step.deliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Integrity Callout (No false promises) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-base font-bold text-[#0E1E30]">
              Pendekatan Pengadaan & Implementasi Tanpa Klaim Kosong
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kami menghargai standar kepatuhan bank dengan tidak memberikan janji instan yang tidak realistis seperti "Go live dalam 30 hari" atau "tanpa perubahan sistem bank". Setiap timeline disusun secara terukur berbasis temuan integrasi teknis.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo('Implementation Planning')}
            className="whitespace-nowrap px-6 py-3 rounded-xl btn-sundawa-gold text-[#0E1E30] text-xs sm:text-sm font-bold transition shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Diskusikan Rencana Implementasi</span>
            <ArrowRight className="w-4 h-4 text-[#0E1E30]" />
          </button>
        </div>
      </div>
    </section>
  );
};
