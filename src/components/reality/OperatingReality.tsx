import React from 'react';
import { Compass, Network, Scale, ShieldAlert, ArrowRight } from 'lucide-react';

export const OperatingReality: React.FC = () => {
  const insights = [
    {
      num: '01',
      title: 'Tantangan Ekspansi & Identitas',
      quote: 'Ketika jaringan agen meluas ke banyak wilayah, proses aktivasi, kewenangan, status, dan cakupan pengawasan harus tetap dapat ditelusuri.',
      icon: Compass,
      tag: 'Distribution & Hierarchy',
      risk: 'Risiko fraud identitas outlet, pergeseran lokasi tanpa otorisasi, dan lemahnya pelacakan batas kewenangan staf cabang.'
    },
    {
      num: '02',
      title: 'Tantangan Kepastian Transaksi',
      quote: 'Ketika koneksi lapangan tidak stabil, bank membutuhkan status yang akurat dan bukti transaksi—bukan keputusan ulang yang berisiko menggandakan transaksi.',
      icon: Network,
      tag: 'Transaction Integrity',
      risk: 'Risiko double debet nasabah, perselisihan saldo kas di lapangan, dan hilangnya kepercayaan publik akibat transaksi menggantung.'
    },
    {
      num: '03',
      title: 'Tantangan Likuiditas & Pengawasan',
      quote: 'Ketika volume transaksi meningkat, pengendalian biaya, float, persetujuan, dan rekonsiliasi tidak dapat bergantung pada proses manual yang terpisah.',
      icon: Scale,
      tag: 'Governance & Liquidity',
      risk: 'Risiko kekosongan kas di sentra ramai, selisih rekonsiliasi akhir hari yang lambat dideteksi, dan kebocoran margin produk digital.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FB] text-[#15273A] border-b border-[#DCE3EB] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-700 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-700" />
            THE OPERATING REALITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4 leading-tight">
            Jaringan dapat berkembang lebih cepat daripada kemampuan pengawasannya.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Tantangan agent banking muncul pada titik pertemuan antara distribusi layanan, transaksi bernilai uang, dan tata kelola bank.
          </p>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-2xl border border-[#DCE3EB] p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-blue-700">
                      {item.num} / {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E1E30]">
                    {item.title}
                  </h3>

                  <blockquote className="text-sm text-[#15273A] leading-relaxed font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    "{item.quote}"
                  </blockquote>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                      Implikasi Risiko Tanpa Sistem Terintegrasi:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.risk}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-medium">
                  <span>Dirancang ke dalam skenario platform</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge Copy */}
        <div className="mt-14 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Inilah skenario yang menjadi dasar perancangan LAKUPANDAI.
          </p>
        </div>
      </div>
    </section>
  );
};
