import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Globe, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SiteHeaderProps {
  onOpenDemo: (focus?: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Skenario Bisnis', href: '#skenario-bisnis' },
    { label: 'Kontrol Operasional', href: '#kontrol-operasional' },
    { label: 'Teknologi & Integrasi', href: '#teknologi-integrasi' },
    { label: 'Implementasi', href: '#implementasi' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-[#0E1E30]/90 backdrop-blur-xl border-b border-slate-700/80 shadow-2xl py-2.5 sm:py-3'
            : 'bg-[#0E1E30] border-b border-slate-800/80 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo: Transparent Sundawa Logo (No background) + Product Title */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative">
                <img
                  src="/sundawa-logo-nobg.png"
                  alt="Sundawa"
                  className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,86,170,0.3)]"
                />
              </div>

              <div className="h-7 w-[1px] bg-slate-700/80 mx-0.5 hidden sm:block" />

              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white font-mono leading-none flex items-center gap-1.5">
                  LAKUPANDAI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                  by Sundawa
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-[#DBC977] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Header Actions */}
            <div className="hidden sm:flex items-center gap-3.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono border border-slate-700/80 px-2.5 py-1 rounded-md bg-slate-900/60 shadow-inner">
                <Globe className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-white font-semibold">ID</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">EN</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenDemo()}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition shadow-lg shadow-blue-900/30 flex items-center gap-1.5 cursor-pointer relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span>Jadwalkan Demo</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg border border-slate-700/80 bg-slate-900/60 active:scale-95 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-slate-800 bg-[#0E1E30]/98 backdrop-blur-2xl px-4 py-4 space-y-3 mt-2.5 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  MENU EKSEKUTIF BANK
                </span>
                <span className="text-emerald-400">● SISTEM AKTIF</span>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 active:bg-blue-900/40 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 active:bg-blue-700 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                >
                  <PhoneCall className="w-4 h-4" />
                  Jadwalkan Executive Demo
                </button>
                <div className="text-center text-[10px] font-mono text-slate-400">
                  PT Sundawa Teknologi Indonesia
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Mobile Bottom Action Pill (Only visible on small mobile devices) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 pointer-events-none flex justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="pointer-events-auto bg-[#0E1E30]/95 backdrop-blur-lg border border-blue-500/40 shadow-2xl rounded-full p-1.5 flex items-center gap-2 max-w-sm w-full ring-1 ring-blue-500/20"
        >
          <a
            href="#skenario-bisnis"
            className="flex-1 text-center py-2 px-3 rounded-full text-[11px] font-mono text-slate-300 hover:text-white active:bg-slate-800 transition"
          >
            Skenario (6)
          </a>
          <button
            onClick={() => onOpenDemo()}
            className="flex-1 py-2 px-4 rounded-full bg-blue-600 text-white text-[11px] font-bold text-center shadow-md active:bg-blue-500 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Demo Bank</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </>
  );
};
