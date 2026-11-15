import React, { useState } from 'react';
import { X, CheckCircle2, Building2, User, Mail, Briefcase, Send, Lock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LeadFormData } from '../../types/landing';

interface ExecutiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledFocus?: string;
}

export const ExecutiveDemoModal: React.FC<ExecutiveDemoModalProps> = ({
  isOpen,
  onClose,
  prefilledFocus
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    workEmail: '',
    institutionName: '',
    division: 'Business',
    discussionFocus: prefilledFocus ? [prefilledFocus] : ['Network'],
    briefNotes: '',
    consent: false,
    website_url: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.institutionName.trim()) {
      setErrorMsg('Mohon lengkapi seluruh kolom yang wajib diisi.');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMsg('Format email kantor tidak valid.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Mohon centang persetujuan kontak untuk melanjutkan.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm font-sans animate-in fade-in duration-200">
      <div className="bg-[#15273A] border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl p-6 sm:p-7 text-white relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg border border-slate-700 hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Executive Demo Berhasil Dijadwalkan
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Terima kasih, <strong>{formData.fullName}</strong>. Undangan agenda sesi Standalone Demonstration untuk institusi <strong>{formData.institutionName}</strong> telah dikirimkan ke email <code>{formData.workEmail}</code>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer shadow-md"
              >
                Kembali ke Halaman Utama
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="pb-3 border-b border-slate-700/80">
              <span className="text-[10px] font-mono uppercase text-blue-400 font-semibold tracking-wider block">
                EXECUTIVE BRIEFING & DEMO
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Jadwalkan Sesi Solusi Agent Banking
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Eksplorasi alur operasional, simulasi konektor core banking, dan model deployment on-premise.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded bg-red-950/60 border border-red-500/50 text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap & Gelar"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">Email Kantor Resmi *</label>
                <input
                  type="email"
                  required
                  placeholder="nama@bank.co.id"
                  value={formData.workEmail}
                  onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">Nama Bank / Institusi *</label>
                <input
                  type="text"
                  required
                  placeholder="Bank atau Lembaga Keuangan"
                  value={formData.institutionName}
                  onChange={e => setFormData({ ...formData, institutionName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">Jabatan / Divisi *</label>
                <select
                  value={formData.division}
                  onChange={e => setFormData({ ...formData, division: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-hidden focus:border-blue-500 cursor-pointer"
                >
                  <option value="Business">Direksi / Retail Banking</option>
                  <option value="Operations">Head of Branchless / Operations</option>
                  <option value="IT">IT & Enterprise Architecture</option>
                  <option value="Risk-Compliance">Risk & Compliance</option>
                  <option value="Procurement">Procurement</option>
                  <option value="Other">Lainnya</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300">Catatan Khusus (Opsional):</label>
              <textarea
                rows={2}
                placeholder="Topik spesifik yang ingin dibahas dalam sesi demo..."
                value={formData.briefNotes}
                onChange={e => setFormData({ ...formData, briefNotes: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 resize-none"
              />
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-300 leading-relaxed">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  Saya menyetujui data ini digunakan untuk keperluan komunikasi B2B perbankan dan koordinasi demo.
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? 'Mengonfirmasi Jadwal...' : 'Konfirmasi Jadwal Demo'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
