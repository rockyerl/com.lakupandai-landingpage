import React, { useState } from 'react';
import { AlertOctagon, CheckCheck, HelpCircle, Download, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isExported, setIsExported] = useState<boolean>(false);

  const mockRows: ReconcileRow[] = [
    {
      id: '1',
      trxId: 'TRX-2026-9011',
      accountMasked: '•••• 4819',
      nominal: 1500000,
      platformStatus: 'SUCCESS',
      coreStatus: 'POSTED',
      category: 'MATCHED',
      note: 'Status dan nominal identik pada kedua sisi buku besar (Core Banking & Platform).'
    },
    {
      id: '2',
      trxId: 'TRX-2026-9012',
      accountMasked: '•••• 1204',
      nominal: 250000,
      platformStatus: 'SUCCESS',
      coreStatus: 'POSTED',
      category: 'MATCHED',
      note: 'Status dan nominal identik pada kedua sisi buku besar (Core Banking & Platform).'
    },
    {
      id: '3',
      trxId: 'TRX-2026-9018',
      accountMasked: '•••• 7731',
      nominal: 500000,
      platformStatus: 'SUCCESS',
      coreStatus: 'REVERSED',
      category: 'MISMATCH',
      note: 'Divergensi: Core menandai reversed karena network timeout, platform menunggu konfirmasi settlement.'
    },
    {
      id: '4',
      trxId: 'TRX-2026-9022',
      accountMasked: '•••• 8820',
      nominal: 750000,
      platformStatus: 'SUCCESS',
      coreStatus: 'NOT_FOUND',
      category: 'MISSING_IN_CORE',
      note: 'Transaksi sukses di platform agen tetapi terputus di antrean message broker core banking.'
    },
    {
      id: '5',
      trxId: 'TRX-2026-9031',
      accountMasked: '•••• 3391',
      nominal: 100000,
      platformStatus: 'NOT_FOUND',
      coreStatus: 'POSTED',
      category: 'MISSING_IN_OURS',
      note: 'Mutasi tercatat di core banking namun tidak ada payload ID dari agen (indikasi debit internal).'
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

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "TraceID,Rekening,Nominal,PlatformStatus,CoreStatus,Klasifikasi\n"
      + mockRows.map(e => `${e.trxId},${e.accountMasked},${e.nominal},${e.platformStatus},${e.coreStatus},${e.category}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "laporan-rekonsiliasi-lakupandai-demo.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsExported(true);
    setTimeout(() => setIsExported(false), 2500);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-4 sm:p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            DAILY 4-WAY RECONCILIATION ENGINE · DEMO
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCSV}
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono bg-slate-900 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 cursor-pointer shadow-xs active:bg-slate-700 transition"
        >
          {isExported ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Berkas CSV Terunduh!</span>
            </>
          ) : (
            <>
              <Download className="w-3 h-3 text-emerald-400" />
              <span>Export Audit Package</span>
            </>
          )}
        </motion.button>
      </div>

      {/* 4 Quadrant Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3.5">
        {[
          { key: 'MATCHED', label: 'MATCHED', count: counts.MATCHED, color: 'emerald', sub: '99.6% Selaras' },
          { key: 'MISMATCH', label: 'MISMATCH', count: counts.MISMATCH, color: 'amber', sub: 'Status Beda' },
          { key: 'MISSING_IN_CORE', label: 'MISSING IN CORE', count: counts.MISSING_IN_CORE, color: 'red', sub: 'Hanya di Platform' },
          { key: 'MISSING_IN_OURS', label: 'MISSING IN OURS', count: counts.MISSING_IN_OURS, color: 'purple', sub: 'Hanya di Core' }
        ].map((tab) => {
          const isSelected = activeFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`p-2 sm:p-2.5 rounded-lg border text-left transition cursor-pointer ${
                isSelected
                  ? 'bg-blue-900/40 border-blue-400 ring-2 ring-blue-500/30'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[9px] sm:text-[10px] font-mono text-${tab.color}-400 font-bold`}>{tab.label}</span>
                {tab.key === 'MATCHED' && <CheckCheck className="w-3 h-3 text-emerald-400" />}
                {tab.key === 'MISMATCH' && <AlertOctagon className="w-3 h-3 text-amber-400" />}
              </div>
              <p className="text-sm sm:text-base font-bold font-mono text-slate-100">{tab.count.toLocaleString()}</p>
              <p className="text-[9px] text-slate-400 truncate">{tab.sub}</p>
            </button>
          );
        })}
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-700/80 bg-[#15273A]/80">
        <table className="w-full text-left text-xs min-w-[500px]">
          <thead className="bg-slate-900/80 text-slate-400 font-mono text-[10px] sm:text-[11px] border-b border-slate-700">
            <tr>
              <th className="py-2 px-3">Trace ID</th>
              <th className="py-2 px-3">Rekening Masked</th>
              <th className="py-2 px-3">Nominal (IDR)</th>
              <th className="py-2 px-3">Platform</th>
              <th className="py-2 px-3">Core</th>
              <th className="py-2 px-3">Klasifikasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 font-mono text-[10px] sm:text-[11px]">
            {filteredRows.map((row) => {
              const isSelected = selectedRow?.id === row.id;
              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  className={`hover:bg-slate-800/60 cursor-pointer transition ${
                    isSelected ? 'bg-blue-900/40 ring-1 ring-blue-500/40' : ''
                  }`}
                >
                  <td className="py-2 px-3 text-slate-300 font-semibold">{row.trxId}</td>
                  <td className="py-2 px-3 text-slate-400">{row.accountMasked}</td>
                  <td className="py-2 px-3 text-slate-200">{row.nominal.toLocaleString('id-ID')}</td>
                  <td className="py-2 px-3 text-slate-300">{row.platformStatus}</td>
                  <td className="py-2 px-3">
                    <span className={row.coreStatus === 'REVERSED' || row.coreStatus === 'NOT_FOUND' ? 'text-amber-400 font-semibold' : 'text-slate-300'}>
                      {row.coreStatus}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold ${
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

      {/* Selected Row Detail Box with slide animation */}
      <AnimatePresence>
        {selectedRow && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-3"
          >
            <div className="p-3 bg-slate-900 rounded-lg border border-blue-500/50 flex items-start justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-blue-300 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Audit Investigasi: {selectedRow.trxId} ({selectedRow.accountMasked})
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedRow.note}
                </p>
              </div>
              <button
                onClick={() => setSelectedRow(null)}
                className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
