import React, { useState } from 'react';
import { scenariosData } from '../../data/scenarios';
import { AgentLifecycleVisual } from './visuals/AgentLifecycleVisual';
import { TransactionCertaintyVisual } from './visuals/TransactionCertaintyVisual';
import { LiquidityVisual } from './visuals/LiquidityVisual';
import { ReconciliationVisual } from './visuals/ReconciliationVisual';
import { GovernanceDiffVisual } from './visuals/GovernanceDiffVisual';
import { ServiceEconomicsVisual } from './visuals/ServiceEconomicsVisual';
import { CheckCircle2, ShieldCheck, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ScenarioExplorerProps {
  onOpenDemo: (prefilledFocus?: string) => void;
}

export const ScenarioExplorer: React.FC<ScenarioExplorerProps> = ({ onOpenDemo }) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenariosData[0].id);

  const activeScenario = scenariosData.find(s => s.id === activeScenarioId) || scenariosData[0];

  const renderVisual = () => {
    switch (activeScenario.visualKind) {
      case 'agent-lifecycle':
        return <AgentLifecycleVisual />;
      case 'transaction-status':
        return <TransactionCertaintyVisual />;
      case 'liquidity':
        return <LiquidityVisual />;
      case 'reconciliation':
        return <ReconciliationVisual />;
      case 'approval':
        return <GovernanceDiffVisual />;
      case 'product-economics':
        return <ServiceEconomicsVisual />;
      default:
        return <AgentLifecycleVisual />;
    }
  };

  return (
    <section id="skenario-bisnis" className="py-24 bg-[#0E1E30] text-white relative overflow-hidden">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            HOW IT WORKS IN REAL BANK OPERATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Bayangkan satu hari operasional jaringan agen bank Anda.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Setiap skenario memperlihatkan kejadian bisnis nyata, cara platform merespons secara sistematis, dan visibilitas yang tersedia bagi tim eksekutif dan operasional bank.
          </p>
        </div>

        {/* Chapter Navigation Tabs (Horizontal on mobile/tablet, sticky list on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {scenariosData.map((scenario) => {
            const isActive = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-400/80 ring-2 ring-blue-500/30 shadow-lg text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <div>
                  <span className={`text-[11px] font-mono font-bold block mb-1 ${isActive ? 'text-blue-300' : 'text-slate-400'}`}>
                    0{scenario.order}
                  </span>
                  <p className="text-xs font-semibold line-clamp-2 leading-tight">
                    {scenario.headline.split('.')[0]}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className={isActive ? 'text-amber-300' : 'text-slate-400'}>
                    {scenario.kicker.split('/')[1]?.trim() || 'SCENARIO'}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Main Display (Split Editorial Story + Interactive Visual Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Storyline & Outcomes (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#15273A]/80 rounded-2xl border border-slate-700/80 p-6 sm:p-7 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-mono text-amber-300 font-semibold tracking-wider block mb-1">
                  {activeScenario.kicker}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeScenario.headline}
                </h3>
              </div>

              {/* Business Situation */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Situasi Lapangan:
                </span>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{activeScenario.situation}"
                </p>
              </div>

              {/* Platform Systematic Response */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase text-blue-300 tracking-wider font-semibold block">
                  Respons Platform:
                </span>
                <ul className="space-y-2">
                  {activeScenario.platformResponse.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bank Control Statement */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Kontrol yang Dipegang Bank:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeScenario.bankOutcome}
                </p>
              </div>

              {/* Capabilities & Caveat */}
              <div className="pt-2 border-t border-slate-700/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {activeScenario.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {activeScenario.caveat && (
                  <p className="text-[11px] text-slate-400 italic leading-relaxed bg-slate-900/50 p-2.5 rounded border border-slate-800">
                    ℹ️ {activeScenario.caveat}
                  </p>
                )}
              </div>
            </div>

            {/* Inline CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-[#15273A]/60 rounded-xl border border-slate-700/70">
              <span className="text-xs text-slate-300">
                Tertarik menguji skenario ini dengan model bisnis bank Anda?
              </span>
              <button
                onClick={() => onOpenDemo(activeScenario.headline)}
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                Bahas Skenario Ini
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Visual Canvas (7 Cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative">
              {renderVisual()}
            </div>
          </div>
        </div>

        {/* Scenario Conclusion Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-slate-900/80 rounded-2xl border border-slate-700/80">
          <p className="text-sm sm:text-base font-semibold text-slate-200 mb-4">
            "Dari ekspansi hingga rekonsiliasi, setiap titik operasional membutuhkan kontrol yang saling terhubung."
          </p>
          <button
            onClick={() => onOpenDemo('General Scenarios')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition shadow-lg shadow-blue-900/30 cursor-pointer"
          >
            Bahas Skenario Bank Anda
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
