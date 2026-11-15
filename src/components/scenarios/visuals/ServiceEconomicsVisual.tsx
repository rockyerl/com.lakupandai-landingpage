import React, { useState } from 'react';
import { Server, TrendingUp, CheckCircle2, ArrowRight, RefreshCw, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  supplierCost: number;
  bankMarkup: number;
  agentFee: number;
  activeSupplier: string;
  latencyMs: number;
}

export const ServiceEconomicsVisual: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: 'pln-100',
      name: 'Token Listrik PLN Rp 100.000',
      category: 'Utilitas',
      supplierCost: 100250,
      bankMarkup: 1500,
      agentFee: 1000,
      activeSupplier: 'Aggregator Switch A',
      latencyMs: 78
    },
    {
      id: 'tsel-50gb',
      name: 'Paket Data Telkomsel 50GB',
      category: 'Telekomunikasi',
      supplierCost: 121000,
      bankMarkup: 2500,
      agentFee: 1500,
      activeSupplier: 'Telco Direct API',
      latencyMs: 64
    },
    {
      id: 'pdam-bdg',
      name: 'Tagihan PDAM Kota Bandung',
      category: 'Air Bersih',
      supplierCost: 84500,
      bankMarkup: 2000,
      agentFee: 1000,
      activeSupplier: 'Regional Biller Gateway',
      latencyMs: 112
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(products[0]);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'premier'>('standard');
  const [isFailoverActive, setIsFailoverActive] = useState<boolean>(false);

  const tierMultiplier = selectedTier === 'premier' ? 1.2 : 1.0;
  const computedBankMarkup = Math.round(selectedProduct.bankMarkup * tierMultiplier);
  const endUserPrice = selectedProduct.supplierCost + computedBankMarkup + selectedProduct.agentFee;

  const toggleFailover = () => {
    setIsFailoverActive(!isFailoverActive);
  };

  return (
    <div className="bg-[#0E1E30] text-white rounded-xl border border-slate-700/60 p-4 sm:p-5 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-700/60 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            NATIVE PPOB ROUTER & MARGIN WATERFALL · DEMO
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          NATIVE API ROUTING · NO WEBVIEW
        </div>
      </div>

      {/* Product Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-3">
        {products.map(p => {
          const isSelected = p.id === selectedProduct.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`p-2 sm:p-2.5 rounded-lg border text-left transition cursor-pointer ${
                isSelected
                  ? 'bg-blue-900/40 border-blue-400 ring-2 ring-blue-500/30 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mb-0.5">{p.category}</span>
              <p className="text-[11px] sm:text-xs font-semibold line-clamp-1">{p.name}</p>
            </button>
          );
        })}
      </div>

      {/* Routing Topology & Interactive Failover Simulation */}
      <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-blue-400" />
          <div>
            <span className="text-slate-400 text-[10px] block">Rute Supplier Aktif:</span>
            <span className="font-semibold text-slate-200">
              {isFailoverActive ? 'Secondary Biller Switch B (Failover)' : selectedProduct.activeSupplier}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-mono">
          <span className="text-slate-400">
            Latensi: <strong className={isFailoverActive ? 'text-amber-400' : 'text-emerald-400'}>{isFailoverActive ? '94ms' : `${selectedProduct.latencyMs}ms`}</strong>
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleFailover}
            className={`px-2.5 py-1 rounded border text-[10px] font-mono cursor-pointer transition flex items-center gap-1 ${
              isFailoverActive
                ? 'bg-amber-950 border-amber-500/50 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <RefreshCw className={`w-3 h-3 ${isFailoverActive ? 'text-amber-400' : 'text-slate-400'}`} />
            <span>{isFailoverActive ? 'Kembalikan Primer' : 'Simulasi Failover'}</span>
          </motion.button>
        </div>
      </div>

      {/* Margin Waterfall Breakdown */}
      <div className="my-3 bg-[#15273A] rounded-lg border border-slate-700 p-3.5 sm:p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            Waterfall Struktur Biaya & Margin Transaksi
          </span>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-slate-400 text-[10px] mr-1 hidden sm:inline">Tier:</span>
            <button
              onClick={() => setSelectedTier('standard')}
              className={`px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer ${
                selectedTier === 'standard' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setSelectedTier('premier')}
              className={`px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer ${
                selectedTier === 'premier' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Premier (+20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
          <div className="bg-slate-900/80 p-2 sm:p-2.5 rounded border border-slate-800">
            <span className="text-[9px] sm:text-[10px] text-slate-400 block">Harga Pokok Supplier</span>
            <span className="font-semibold text-slate-300 text-[11px] sm:text-xs">
              Rp {selectedProduct.supplierCost.toLocaleString('id-ID')}
            </span>
          </div>

          <div className="bg-emerald-950/40 p-2 sm:p-2.5 rounded border border-emerald-500/40">
            <span className="text-[9px] sm:text-[10px] text-emerald-400 block font-semibold">Net Margin Bank</span>
            <span className="font-bold text-emerald-300 text-[11px] sm:text-xs">
              + Rp {computedBankMarkup.toLocaleString('id-ID')}
            </span>
          </div>

          <div className="bg-blue-950/40 p-2 sm:p-2.5 rounded border border-blue-500/40">
            <span className="text-[9px] sm:text-[10px] text-blue-300 block">Komisi Agen</span>
            <span className="font-semibold text-blue-200 text-[11px] sm:text-xs">
              + Rp {selectedProduct.agentFee.toLocaleString('id-ID')}
            </span>
          </div>

          <div className="bg-slate-900/90 p-2 sm:p-2.5 rounded border border-slate-600">
            <span className="text-[9px] sm:text-[10px] text-amber-300 block font-semibold">Harga Bayar Nasabah</span>
            <span className="font-bold text-slate-100 text-[11px] sm:text-xs">
              Rp {endUserPrice.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        <div className="text-[9px] sm:text-[10px] text-slate-400 pt-1.5 border-t border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
          <span>Pencatatan P&L otomatis per transaksi terintegrasi ke modul settlement harian.</span>
          <span className="italic text-slate-400">Pembagian bagi hasil bank disepakati bilateral.</span>
        </div>
      </div>
    </div>
  );
};
