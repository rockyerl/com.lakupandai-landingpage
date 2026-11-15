import React from 'react';
import { OperationsCockpit } from './OperationsCockpit';
import { ArrowRight, ChevronRight, ShieldCheck, Server, Lock, Layers } from 'lucide-react';

interface ExecutiveHeroProps {
  onOpenDemo: () => void;
}

export const ExecutiveHero: React.FC<ExecutiveHeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0E1E30] text-white overflow-hidden font-sans border-b border-slate-800">
      {/* Subtle architectural background gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-blue-300 text-xs font-mono uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SUNDAWA ENTERPRISE · AGENT BANKING INFRASTRUCTURE</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Perluas jangkauan layanan.{' '}
              <span className="sundawa-gold-text">
                Pertahankan kendali bank.
              </span>
            </h1>

            {/* Editorial Executive Body Copy */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              <p>
                Ketika jaringan agen bertambah, tantangannya bukan hanya menghadirkan transaksi lebih dekat ke nasabah. Bank juga perlu menjaga identitas agen, kepastian status transaksi, likuiditas, pengawasan, dan akuntabilitas dalam satu model operasional yang konsisten.
              </p>
              <p>
                <strong className="text-white font-semibold">LAKUPANDAI by Sundawa</strong> dirancang untuk mendukung operasional agent banking—dari aplikasi agen hingga pengendalian backoffice dan integrasi ke ekosistem bank.
              </p>
            </div>

            {/* CTA Group */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-all shadow-xl shadow-blue-900/40 hover:shadow-blue-800/60 flex items-center gap-2 cursor-pointer"
                >
                  Jadwalkan Executive Demo
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#skenario-bisnis"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition flex items-center gap-2"
                >
                  Jelajahi Skenario Bisnis
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Microcopy Trust Statement */}
              <p className="text-xs text-slate-400 font-mono">
                Diskusi berbasis use case, kebutuhan integrasi, dan model implementasi bank Anda.
              </p>
            </div>

            {/* Executive Architectural Assurance Badges */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400 shrink-0" />
                <span>On-Premise DC/DRC</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Maker-Checker Segregation</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Immutable Audit Trail</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Core Adapter Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cockpit Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <OperationsCockpit />
          </div>
        </div>
      </div>
    </section>
  );
};
