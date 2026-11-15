import React from 'react';

interface SiteFooterProps {
  onOpenDemo: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-[#070F18] text-slate-400 font-sans border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/sundawa-logo-dark.png"
                alt="Sundawa"
                className="h-12 w-auto object-contain"
              />
              <div className="h-9 w-[1px] bg-slate-800 hidden sm:block" />
              <div>
                <span className="text-base font-bold font-mono text-white tracking-tight flex items-center gap-1.5">
                  LAKUPANDAI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                  Agent Banking Platform by Sundawa
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Solusi teknologi enterprise untuk operasional agent banking yang dirancang bagi institusi perbankan. Mengoperasikan, mengendalikan, dan mengembangkan jaringan distribusi agen dengan tata kelola terpadu.
            </p>

            <div className="pt-1 text-[11px] font-mono text-slate-400">
              Produk Resmi dari <strong className="text-slate-200">PT Sundawa Teknologi Indonesia</strong>
            </div>
          </div>

          {/* Nav Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider block">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#skenario-bisnis" className="hover:text-white transition-colors">
                  Skenario Bisnis
                </a>
              </li>
              <li>
                <a href="#kontrol-operasional" className="hover:text-white transition-colors">
                  Kontrol Operasional
                </a>
              </li>
              <li>
                <a href="#teknologi-integrasi" className="hover:text-white transition-colors">
                  Teknologi & Integrasi
                </a>
              </li>
              <li>
                <a href="#implementasi" className="hover:text-white transition-colors">
                  Jalur Implementasi
                </a>
              </li>
            </ul>
          </div>

          {/* Action / Privacy (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider block">
              Akses & Kepatuhan
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenDemo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Jadwalkan Executive Demo
                </button>
              </li>
              <li>
                <a href="#kontak-eksekutif" className="hover:text-white transition-colors">
                  Kirim Kebutuhan Integrasi
                </a>
              </li>
              <li>
                <span className="text-slate-400">
                  Kebijakan Privasi B2B
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Data Governance Framework
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Synthesis Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <p className="max-w-2xl leading-relaxed">
            Seluruh materi, visualisasi alur transaksi, dan metrik pada landing page ini disajikan menggunakan data sintetis demonstrasi untuk kepentingan evaluasi arsitektur perbankan. Implementasi operasional diatur dalam kontrak perjanjian layanan resmi bersama PT Sundawa Teknologi Indonesia.
          </p>

          <div className="text-right whitespace-nowrap">
            © 2026 PT Sundawa Teknologi Indonesia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
