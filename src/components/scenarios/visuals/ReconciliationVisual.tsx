import React, { useState } from 'react';
import { FileSpreadsheet, AlertOctagon, CheckCheck, HelpCircle, Download, ExternalLink } from 'lucide-react';

interface ReconcileRow {
  id: string;
  trxId: string;
  accountMasked: string;
  nominal: number;
  platformStatus: string;
  coreStatus: string;
  category: 'MATCHED' | 'MISMATCH' | 'MISSING_IN_CORE' | 'MISSING_IN_OURS';
  note: string;
}

export const ReconciliationVisual: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'MATCHED' | 'MISMATCH' | 'MISSING_IN_CORE' | 'MISSING_IN_OURS'>('ALL');
  const [selectedRow, setSelectedRow] = useState<ReconcileRow | null>(null);

  const mockRows: ReconcileRow[] = [
    {
      id: '1',
      trxId: 'TRX-2026-9011',
      accountMasked: '•••• 4819',
      nominal: 1500000,
      platformStatus: 'SUCCESS',
      coreStatus: 'POSTED',
      category: 'MATCHED',
      note: 'Status dan nominal identik pada kedua sisi buku besar.'
    },
    {
      id: '2',
      trxId: 'TRX-2026-9012',
      accountMasked: '•••• 1204',
      nominal: 250000,
      platformStatus: 'SUCCESS',
      coreStatus: 'POSTED',
      category: 'MATCHED',
      note: 'Status dan nominal identik pada kedua sisi buku besar.'
    },
    {
      id: '3',
      trxId: 'TRX-2026-9018',
      accountMasked: '•••• 7731',
      nominal: 500000,
      platformStatus: 'SUCCESS',
      coreStatus: 'REVERSED',
      category: 'MISMATCH',
      note: 'Divergensi: Core menandai reversed karena network timeout, platform menunggu settlement konfirmasi.'
    },
    {
      id: '4',
      trxId: 'TRX-2026-9022',
      accountMasked: '•••• 8820',
      nominal: 750000,
      platformStatus: 'SUCCESS',
      coreStatus: 'NOT_FOUND',
      category: 'MISSING_IN_CORE',
      note: 'Transaksi berhasil di platform agen tetapi terputus di antrean message broker core banking.'
    },
    {
      id: '5',
      trxId: 'TRX-2026-9031',
      accountMasked: '•••• 3391',
      nominal: 100000,
      platformStatus: 'NOT_FOUND',
      coreStatus: 'POSTED',
      category: 'MISSING_IN_OURS',
      note: 'Mutasi tercatat di core banking namun tidak ada payload ID dari agen (indikasi debit manual internal).'
    }
  ];

  const filteredRows = activeFilter === 'ALL'
    ? mockRows
    : mockRows.filter(r => r.category === activeFilter);

  const counts = {
    MATCHED: 1420,
    MISMATCH: 3,
    MISSING_IN_CORE: 1,
    MISSING_IN_OURS: 1
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            DAILY 4-WAY RECONCILIATION ENGINE · DEMO
          </span>
        </div>
        <button
          onClick={() => alert('Simulasi unduh berkas audit rekonsiliasi harian (format CSV/XLSX).')}
          className="flex items-center gap-1.5 text-[11px] font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700 cursor-pointer"
        >
          <Download className="w-3 h-3 text-emerald-400" />
          Export Audit Package
        </button>
      </div>

      {/* 4 Quadrant Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        <button
          onClick={() => setActiveFilter('MATCHED')}
          className={`p-2.5 rounded-lg border text-left transition cursor-pointer ${
            activeFilter === 'MATCHED'
              ? 'bg-emerald-950/60 border-emerald-500/80 ring-1 ring-emerald-500/30'
              : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-400">MATCHED</span>
            <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-base font-bold font-mono text-slate-100">{counts.MATCHED.toLocaleString()}</p>
          <p className="text-[10px] text-slate-400">99.6% Selaras</p>
        </button>

        <button
          onClick={() => setActiveFilter('MISMATCH')}
          className={`p-2.5 rounded-lg border text-left transition cursor-pointer ${
            activeFilter === 'MISMATCH'
              ? 'bg-amber-950/60 border-amber-500/80 ring-1 ring-amber-500/30'
              : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-amber-400">MISMATCH</span>
            <AlertOctagon className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <p className="text-base font-bold font-mono text-amber-300">{counts.MISMATCH}</p>
          <p className="text-[10px] text-slate-400">Status Berbeda</p>
        </button>

        <button
          onClick={() => setActiveFilter('MISSING_IN_CORE')}
          className={`p-2.5 rounded-lg border text-left transition cursor-pointer ${
            activeFilter === 'MISSING_IN_CORE'
              ? 'bg-red-950/60 border-red-500/80 ring-1 ring-red-500/30'
              : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-red-400">MISSING IN CORE</span>
            <span className="w-2 h-2 rounded-full bg-red-400" />
          </div>
          <p className="text-base font-bold font-mono text-red-300">{counts.MISSING_IN_CORE}</p>
          <p className="text-[10px] text-slate-400">Hanya di Platform</p>
        </button>

        <button
          onClick={() => setActiveFilter('MISSING_IN_OURS')}
          className={`p-2.5 rounded-lg border text-left transition cursor-pointer ${
            activeFilter === 'MISSING_IN_OURS'
              ? 'bg-purple-950/60 border-purple-500/80 ring-1 ring-purple-500/30'
              : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-400">MISSING IN OURS</span>
            <span className="w-2 h-2 rounded-full bg-purple-400" />
          </div>
          <p className="text-base font-bold font-mono text-purple-300">{counts.MISSING_IN_OURS}</p>
          <p className="text-[10px] text-slate-400">Hanya di Core</p>
        </button>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-700/80 bg-[#15273A]/80">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900/80 text-slate-400 font-mono text-[11px] border-b border-slate-700">
            <tr>
              <th className="py-2.5 px-3">Trace ID</th>
              <th className="py-2.5 px-3">Rekening Masked</th>
              <th className="py-2.5 px-3">Nominal (IDR)</th>
              <th className="py-2.5 px-3">Status Platform</th>
              <th className="py-2.5 px-3">Status Core</th>
              <th className="py-2.5 px-3">Klasifikasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
            {filteredRows.map((row) => {
              const isSelected = selectedRow?.id === row.id;
              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  className={`hover:bg-slate-800/50 cursor-pointer transition ${
                    isSelected ? 'bg-blue-900/30 ring-1 ring-blue-500/40' : ''
                  }`}
                >
                  <td className="py-2 px-3 text-slate-300 font-medium">{row.trxId}</td>
                  <td className="py-2 px-3 text-slate-400">{row.accountMasked}</td>
                  <td className="py-2 px-3 text-slate-200">{row.nominal.toLocaleString('id-ID')}</td>
                  <td className="py-2 px-3">
                    <span className="text-slate-300">{row.platformStatus}</span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={row.coreStatus === 'REVERSED' || row.coreStatus === 'NOT_FOUND' ? 'text-amber-400 font-semibold' : 'text-slate-300'}>
                      {row.coreStatus}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                        row.category === 'MATCHED'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : row.category === 'MISMATCH'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : row.category === 'MISSING_IN_CORE'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}
                    >
                      {row.category}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Row Detail Box */}
      {selectedRow && (
        <div className="mt-3 p-3 bg-slate-900/90 rounded border border-blue-500/40 flex items-start justify-between gap-3 text-xs">
          <div className="space-y-1">
            <span className="font-semibold text-blue-300 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Catatan Investigasi Selisih: {selectedRow.trxId}
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {selectedRow.note}
            </p>
          </div>
          <button
            onClick={() => setSelectedRow(null)}
            className="text-[10px] text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
};
