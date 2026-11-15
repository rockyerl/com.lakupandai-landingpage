import React, { useState } from 'react';
import { faqData } from '../../data/faq';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ProcurementFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F9FB] text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-700 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            PROCUREMENT & COMPLIANCE FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Pertanyaan Kunci Pengadaan & Kepatuhan Bank
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Menjawab pertimbangan teknis, kepatuhan, dan integrasi dari sudut pandang Procurement, Risk, IT Architecture, dan Operasional Perbankan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0E1E30] flex items-center gap-2.5">
                    <span className="text-xs font-mono text-blue-700 font-semibold shrink-0">
                      Q{idx + 1}.
                    </span>
                    {item.question}
                  </span>
                  <div className="p-1 rounded bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="p-3 bg-white rounded-lg border border-slate-200/60 font-sans">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
