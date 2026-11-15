import React from 'react';
import { ShieldCheck, Lock, FileSearch, EyeOff, CheckSquare, Activity, AlertCircle } from 'lucide-react';

export const GovernanceMatrix: React.FC = () => {
  const controls = [
    {
      concern: 'Pemisahan Kewenangan (Approval & Segregation)',
      design: 'Maker-checker berlapis secara sistemik. Staf pengusul (maker) diblokir menjadi checker. Otorisasi bertingkat berdasarkan limit nominal dan yurisdiksi cabang.',
      avoid: 'Hindari klaim "Sepenuhnya otomatis compliant OJK/BI"',
      evidence: 'Prinsip tata kelola baku perbankan (Four-Eyes Principle)',
      icon: ShieldCheck
    },
    {
      concern: 'Keterlacakan Audit (Traceability & Immutability)',
      design: 'Audit trail berbasis hash chaining (kriptografis). Seluruh perubahan data, persetujuan, dan akses pembacaan data nasabah tercatat dalam ledger kekal terpisah.',
      avoid: 'Hindari klaim "Audit mustahil gagal"',
      evidence: 'Cryptographic SHA-256 state chain, append-only',
      icon: FileSearch
    },
    {
      concern: 'Integritas Perangkat & Permintaan (Device Trust)',
      design: 'Sertifikat perangkat unik (device key) disimpan pada secure keystore perangkat keras. Setiap payload permintaan API ditandatangani secara digital (request signing).',
      avoid: 'Hindari klaim "100% anti-fraud / zero vulnerability"',
      evidence: 'Native integrity verification + Android Keystore',
      icon: Lock
    },
    {
      concern: 'Perlindungan Privasi Data Nasabah (Privacy by Design)',
      design: 'Masking data sensitif otomatis pada layar antarmuka (contoh: •••• 1234), pencatatan versi persetujuan (consent versioning), dan kebijakan retensi data terkelola.',
      avoid: 'Hindari klaim "Telah bersertifikasi" tanpa bukti resmi',
      evidence: 'Mendukung kepatuhan tata kelola perlindungan data bank',
      icon: EyeOff
    },
    {
      concern: 'Tata Kelola Transaksi (Transaction Governance)',
      design: 'Aturan biaya, limit harian per tier agen, kontrol visibilitas menu layanan, serta kepastian status hasil definitif atau transisi aman ke UNKNOWN.',
      avoid: 'Hindari klaim "Semua transaksi selalu instan dalam segala kondisi"',
      evidence: 'Idempotency guard + state machine deterministik',
      icon: CheckSquare
    },
    {
      concern: 'Observabilitas Operasional (Observability & Telemetry)',
      design: 'Structured JSON logging dengan korelasi Unique Trace ID, siap dihubungkan langsung ke ELK Stack, Splunk, atau SIEM keamanan data center bank.',
      avoid: 'Hindari klaim "Managed service 24x7" tanpa perjanjian SLA',
      evidence: 'OpenTelemetry compatible + isolated audit storage',
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FB] text-[#15273A] border-b border-[#DCE3EB] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            CONTROL BY DESIGN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1E30] mb-4">
            Bukan hanya transaksi yang tercatat. Keputusan di baliknya juga.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Untuk institusi keuangan, kemampuan operasi harus berjalan bersama keterlacakan, kontrol berlapis, dan kesiapan proses audit kepatuhan.
          </p>
        </div>

        {/* Governance Control Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((ctrl, idx) => {
            const Icon = ctrl.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DCE3EB] p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      CONTROL #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0E1E30] leading-snug">
                    {ctrl.concern}
                  </h3>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                      Perancangan Platform:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                      {ctrl.design}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald-700 font-semibold tracking-wider block mb-1">
                      Mekanisme Verifikasi:
                    </span>
                    <p className="text-xs font-mono text-slate-600">
                      ✓ {ctrl.evidence}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-amber-700/90 font-mono italic flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>Prinsip Kehati-hatian: {ctrl.avoid}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Qualifier */}
        <div className="mt-12 p-4 bg-white rounded-xl border border-slate-200 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-xs text-slate-600 leading-relaxed font-mono">
            <strong>Catatan Kepatuhan Enterprise:</strong> Implementasi kontrol dan pengujian dilakukan sesuai cakupan (scope), arsitektur target, kebijakan keamanan internal, serta proses penerimaan (UAT) masing-masing bank.
          </p>
        </div>
      </div>
    </section>
  );
};
