import React, { useState } from 'react';
import { LeadFormData } from '../../types/landing';
import { Send, CheckCircle2, ShieldCheck, Lock, AlertCircle, Building2, User, Mail, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExecutiveCTAProps {
  onFormSubmitted?: (data: LeadFormData) => void;
  prefilledFocus?: string;
}

export const ExecutiveCTA: React.FC<ExecutiveCTAProps> = ({ onFormSubmitted, prefilledFocus }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    workEmail: '',
    institutionName: '',
    division: 'Business',
    discussionFocus: prefilledFocus ? [prefilledFocus] : ['Network'],
    briefNotes: '',
    consent: false,
    website_url: '' // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const focusOptions = [
    { id: 'Network', label: 'Ekspansi Jaringan Agen' },
    { id: 'Transactions', label: 'Kepastian Transaksi & Offline Policy' },
    { id: 'Control', label: 'Tata Kelola, Float & Rekonsiliasi' },
    { id: 'Integration', label: 'Integrasi Core Banking & On-Premise' },
    { id: 'Other', label: 'Kebutuhan Khusus / Kepatuhan' }
  ];

  const handleFocusToggle = (id: string) => {
    setFormData(prev => {
      const exists = prev.discussionFocus.includes(id);
      if (exists) {
        if (prev.discussionFocus.length === 1) return prev; // keep at least 1
        return { ...prev, discussionFocus: prev.discussionFocus.filter(f => f !== id) };
      } else {
        return { ...prev, discussionFocus: [...prev.discussionFocus, id] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Honeypot check
    if (formData.website_url) {
      // Silent discard bot
      setIsSubmitted(true);
      return;
    }

    // Basic validation
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

    // Simulate verified server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onFormSubmitted) {
        onFormSubmitted(formData);
      }
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  return (
    <section id="kontak-eksekutif" className="py-24 bg-[#0E1E30] text-white border-b border-slate-800 font-sans relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              LET'S DISCUSS YOUR BANK'S OPERATING MODEL
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Perlihatkan tantangan operasional bank Anda.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Apakah fokus Anda memperluas titik layanan, memperkuat kontrol transaksi, atau menyatukan proses backoffice dan integrasi? Mulai dengan sesi eksplorasi yang relevan bagi tim bisnis, operasional, dan teknologi bank Anda.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <Lock className="w-4 h-4" />
                Jaminan Kerahasiaan Informasi Perbankan
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sesi eksplorasi bersifat B2B strategis. Kami <strong>tidak memerlukan data nasabah nyata, kredensial produksi, atau informasi rahasia bank</strong> dalam sesi diskusi maupun evaluasi sistem.
              </p>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-4">
              <span>✓ Mock Demo Standalone</span>
              <span>✓ Gap Analysis Integrasi</span>
              <span>✓ IT Architecture Walkthrough</span>
            </div>
          </div>

          {/* Right Column: B2B Enterprise Meeting Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#15273A] rounded-2xl border border-slate-700/80 p-7 sm:p-8 shadow-2xl relative">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Permintaan Diskusi Telah Diterima
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.fullName}</strong>. Tim enterprise banking kami akan menelaah profil institusi <strong>{formData.institutionName}</strong> dan mengirimkan undangan agenda via email kantor Anda ({formData.workEmail}).
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        institutionName: '',
                        division: 'Business',
                        discussionFocus: ['Network'],
                        briefNotes: '',
                        consent: false
                      });
                    }}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Kirim formulir lain untuk rekan kerja
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="pb-3 border-b border-slate-700/80 flex items-center justify-between">
                  <span className="font-semibold text-sm text-slate-200">
                    Formulir Permintaan Executive Demo & Discovery
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    * Wajib diisi
                  </span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/50 text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url">Website URL (leave blank)</label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    value={formData.website_url || ''}
                    onChange={e => setFormData({ ...formData, website_url: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: R. Pratama, S.E."
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      Email Kantor Resmi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@bankinstitusi.co.id"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Institution Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      Nama Bank / Institusi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Bank atau BPR"
                      value={formData.institutionName}
                      onChange={e => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Division / Role */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                      Jabatan / Divisi *
                    </label>
                    <select
                      value={formData.division}
                      onChange={e => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition cursor-pointer"
                    >
                      <option value="Business">Direksi / Retail Banking / Bisnis</option>
                      <option value="Operations">Head of Branchless / Operations</option>
                      <option value="IT">IT / Enterprise Architecture / Security</option>
                      <option value="Risk-Compliance">Risk Management & Compliance</option>
                      <option value="Procurement">Procurement & PMO</option>
                      <option value="Other">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Focus Multi-Select */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-[11px] font-semibold text-slate-300 block">
                    Fokus Diskusi yang Diinginkan * (Pilih satu atau lebih):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {focusOptions.map(opt => {
                      const isSelected = formData.discussionFocus.includes(opt.id);
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => handleFocusToggle(opt.id)}
                          className={`px-3 py-1.5 rounded-lg border text-[11px] transition cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 border-blue-400 text-white font-semibold'
                              : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Brief Notes */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-semibold text-slate-300">
                      Keterangan Singkat / Pertanyaan Awal (Opsional):
                    </label>
                    <span className="text-[10px] text-slate-500">
                      Jangan sertakan data rahasia
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Kami sedang merencanakan ekspansi 500 agen di Jawa Barat dan membutuhkan evaluasi konektor ke Core Banking..."
                    value={formData.briefNotes}
                    onChange={e => setFormData({ ...formData, briefNotes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-slate-300 leading-relaxed">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                    />
                    <span>
                      Saya menyetujui data kontak ini digunakan semata-mata untuk komunikasi penjadwalan demo dan diskusi solusi B2B perbankan sesuai dengan kebijakan privasi.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl btn-sundawa-gold text-[#0E1E30] font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0E1E30]/30 border-t-[#0E1E30] rounded-full animate-spin" />
                        <span>Mengirimkan Permintaan Terenkripsi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0E1E30]" />
                        <span>Kirim Permintaan Executive Demo</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-1 text-center text-[10px] font-mono text-slate-400">
                  Respons tim enterprise banking dalam 1x24 jam kerja resmi.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
