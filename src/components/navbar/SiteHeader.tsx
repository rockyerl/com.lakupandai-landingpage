import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, Menu, X, Globe, Building2 } from 'lucide-react';

interface SiteHeaderProps {
  onOpenDemo: () => void;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#0E1E30]/95 backdrop-blur-md border-b border-slate-700/80 shadow-lg py-3'
          : 'bg-[#0E1E30] border-b border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/40 flex items-center justify-center shadow-inner">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-mono leading-none flex items-center gap-1.5">
                LAKUPANDAI
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                Agent Banking Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono border border-slate-700/80 px-2.5 py-1 rounded-md bg-slate-900/60">
              <Globe className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-white font-semibold">ID</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 hover:text-slate-200 cursor-pointer">EN</span>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer"
            >
              Jadwalkan Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-1.5 rounded-lg border border-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-700 mt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold text-center"
              >
                Jadwalkan Executive Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
