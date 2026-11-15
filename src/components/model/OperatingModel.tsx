import React, { useState } from 'react';
import { Smartphone, Building2, Server, ArrowDown, Shield, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

export const OperatingModel: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: 'Layer 1: Agent Channel (Kanal Lapangan)',
      subtitle: 'Aplikasi agen Flutter & Pengikatan Perangkat Kriptografis',
      icon: Smartphone,
      color: 'blue',
      description: 'Antarmuka garda terdepan untuk melayani nasabah secara aman di pelosok maupun pusat keramaian.',
      items: [
        'Aplikasi Flutter ringan dan responsif pada berbagai tipe ponsel Android',
        'Autentikasi berlapis: Hardware Device Key + PIN Otorisasi Agen',
        'Transaksi setor tunai, tarik tunai, transfer antarbank, dan produk PPOB',
        'Pencetakan struk digital dengan tanda tangan QR anti-tampering',
        'Antrean aman pengajuan non-tunai (offline queue) saat jaringan hilang'
      ]
    },
    {
      id: 1,
      title: 'Layer 2: Bank Operations & Control (Pusat Kendali Bank)',
      subtitle: 'Backoffice Tata Kelola, Otorisasi, dan Pengawasan Cabang',
      icon: Building2,
      color: 'emerald',
      description: 'Pusat komando terpadu untuk tim bisnis, operasional, risiko, dan audit internal bank.',
      items: [
        'Onboarding & verifikasi identitas outlet agen berjenjang',
        'Mekanisme Maker-Checker mutlak untuk perubahan fee dan limit',
        'Pemantauan saldo float agen dan penanganan peringatan low-float',
        'Engine rekonsiliasi harian 4-kuadran (Matched, Mismatch, Missing)',
        'Audit trail kekal (immutable ledger) mencatat setiap akses data nasabah'
      ]
    },
    {
      id: 2,
      title: 'Layer 3: Integration & Infrastructure (Infrastruktur Bank)',
      subtitle: 'On-Premise Deployment DC/DRC & Konektor Core Modular',
      icon: Server,
      color: 'purple',
      description: 'Lapisan middleware dan konektor yang ditempatkan sepenuhnya di dalam kendali infrastruktur IT bank.',
      items: [
        'Deployment on-premise berbasis RHEL 9 container (Podman / K8s / OpenShift)',
        'Arsitektur aktif-siaga DC (Data Center) dan DRC (Disaster Recovery)',
        'Konektor modular ke Core Banking (ISO 8583 / ISO 20022 / REST API)',
        'Smart Router API native ke mitra agregator tagihan & biller nasional',
        'Structured JSON logging siap integrasi ke ELK Stack & SIEM bank'
      ]
    }
  ];

  return (
    <section id="kontrol-operasional" className="py-24 bg-white text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-700" />
            AN END-TO-END OPERATING MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Dari titik layanan sampai sistem inti bank, alurnya tetap terhubung.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Agent banking tidak selesai pada aplikasi agen. Bank membutuhkan keterhubungan antara pengalaman layanan di lapangan, proses persetujuan dan monitoring, serta integrasi dengan sistem yang sudah menjadi sumber kebenaran transaksi.
          </p>
        </div>

        {/* 3 Layer Flow Diagram Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Layer Selection Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {layers.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E1E30] text-white border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                      : 'bg-[#F8F9FB] border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 shadow-sm'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wide">
                        LAYER 0{layer.id + 1}
                      </span>
                    </div>
                    {isSelected && <ChevronRight className="w-4 h-4 text-blue-400" />}
                  </div>

                  <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-[#0E1E30]'}`}>
                    {layer.title.split(':')[1]?.trim() || layer.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {layer.subtitle}
                  </p>
                </button>
              );
            })}

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs font-mono text-slate-500">
              Agent Channel ➔ Bank Platform Controls ➔ Bank Systems (DC/DRC)
            </div>
          </div>

          {/* Active Layer Deep Dive (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FB] rounded-2xl border border-[#DCE3EB] p-7 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider block mb-1">
                  Arsitektur Detail Layer 0{selectedLayer + 1}
                </span>
                <h3 className="text-2xl font-bold text-[#0E1E30]">
                  {layers[selectedLayer].title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {layers[selectedLayer].description}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider block">
                  Cakupan Kapabilitas Teknis & Operasional:
                </span>
                <ul className="space-y-3">
                  {layers[selectedLayer].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-2">
              <span>Status: Enforced by Core Architecture</span>
              <span className="text-blue-700 font-semibold">ISO 8583 / 20022 / REST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
