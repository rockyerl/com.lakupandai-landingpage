import React, { useState } from 'react';
import { capabilityWorkstreamsData } from '../../data/capabilities';
import { Network, CreditCard, Sliders, DollarSign, ShieldCheck, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

const icons = [Network, CreditCard, Sliders, DollarSign, ShieldCheck];

export const CapabilityWorkstreams: React.FC = () => {
  const [selectedStreamId, setSelectedStreamId] = useState<string>(capabilityWorkstreamsData[0].id);

  const selectedStream = capabilityWorkstreamsData.find(s => s.id === selectedStreamId) || capabilityWorkstreamsData[0];

  return (
    <section className="py-24 bg-white text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-blue-700" />
            THE PLATFORM BEHIND THE SCENARIOS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Lima area kerja yang saling terhubung.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Struktur kapabilitas platform dirancang secara holistik dalam 5 workstream terintegrasi—menghindari fragmentasi modul operasional yang terpisah-pisah.
          </p>
        </div>

        {/* 5 Workstream Grid Selector */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {capabilityWorkstreamsData.map((stream, idx) => {
            const isSelected = stream.id === selectedStreamId;
            const Icon = icons[idx];
            return (
              <button
                key={stream.id}
                onClick={() => setSelectedStreamId(stream.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0E1E30] text-white border-blue-600 shadow-lg ring-2 ring-blue-500/20'
                    : 'bg-[#F8F9FB] border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-blue-500">
                      0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                  </div>
                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#0E1E30]'}`}>
                    {stream.name}
                  </h3>
                </div>
                <p className={`text-[11px] mt-2 line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {stream.oneLiner}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Workstream Deep Dive Panel */}
        <div className="bg-[#F8F9FB] rounded-2xl border border-[#DCE3EB] p-7 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-3">
            <div>
              <span className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider block mb-1">
                Eksplorasi Cakupan Area Kerja
              </span>
              <h3 className="text-2xl font-bold text-[#0E1E30]">
                {selectedStream.name}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {selectedStream.oneLiner}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
              {selectedStream.coverage.map((cov, i) => (
                <span
                  key={i}
                  className="text-xs font-mono bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200 shadow-2xs"
                >
                  {cov}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {selectedStream.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-[#0E1E30] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      {cap.name}
                    </h4>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      cap.phase === 'mvm1'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      {cap.phase === 'mvm1' ? 'MVM-1 BASE' : 'MVM-2 PLANNED'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-2">
            <span>Komitmen Rilis Terstruktur: MVM-1 (Fondasi Terverifikasi) & MVM-2 (Pengayaan Terjadwal)</span>
            <span className="text-blue-700 font-medium">B2B Platform Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
