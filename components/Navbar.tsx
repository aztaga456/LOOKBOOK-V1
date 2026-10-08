'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  onPlanTripClick: () => void;
  onSearchClick?: () => void;
}

export default function Navbar({ onPlanTripClick }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Beranda', 'Home'), id: 'Home', href: '#home' },
    { name: t('Layanan & Paket', 'Services & Tours'), id: 'Packages', href: '#packages' },
    { name: t('Destinasi', 'Destinations'), id: 'Destinations', href: '#destinations' },
    { name: t('Hotel & Resort', 'Hotels & Resorts'), id: 'Hotels', href: '#hotels' },
    { name: t('Tentang Kami', 'About Us'), id: 'About', href: '#about' },
    { name: t('Kontak', 'Contact'), id: 'Contact', href: '#contact' },
  ];

  return (
    /* OUTER WRAPPER: Transparan dari awal, saat discroll ke bawah menjadi blur */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/45 backdrop-blur-md shadow-lg border-b border-white/10 py-0'
          : 'bg-transparent backdrop-blur-none border-b border-transparent py-0'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-18 flex items-center justify-between relative">
          
          {/* LEFT: Logo + Title + Subtitle (Transparan) */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 z-20 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white/80 shadow-md flex-shrink-0 bg-white p-0.5">
              <Image
                src="/logo.jpg"
                alt="Lombok Partner Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg text-white tracking-tight leading-none drop-shadow-md group-hover:text-sky-300 transition-colors">
                Lombok Partner
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200/90 mt-1 leading-none drop-shadow-xs">
                Tour & Travel · Lombok, NTB
              </span>
            </div>
          </Link>

          {/* CENTER: HANYA MENU YANG MENGGANTUNG PUTIH (SISI ATAS MENEMPEL, BAWAH ROUNDED, FONT AKTIF BIRU) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 z-30">
            <nav className="bg-white text-slate-800 rounded-b-2xl sm:rounded-b-3xl px-5 xl:px-7 pt-2.5 pb-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.18)] border-x border-b border-slate-200/90 flex items-center space-x-1 sm:space-x-1.5">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveNav(link.id)}
                    className={`text-xs xl:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-sky-600 font-extrabold bg-sky-50 shadow-xs'
                        : 'text-slate-700 hover:text-sky-600 font-bold hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: TOMBOL BAHASA DENGAN BENDERA (MENGGANTIKAN ICON SEARCH) + TOMBOL MERAH */}
          <div className="flex items-center space-x-2 sm:space-x-3 z-20">
            
            {/* Tombol Bahasa Simple: Hanya Bendera, Tanpa Tulisan (Sangat Ringkas) */}
            <div className="flex items-center bg-white/20 backdrop-blur-md p-1 rounded-full border border-white/35 shadow-sm">
              {/* Bendera Indonesia */}
              <button
                onClick={() => setLang('id')}
                className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'id'
                    ? 'bg-white shadow-xs scale-105'
                    : 'opacity-55 hover:opacity-100 hover:bg-white/10'
                }`}
                title="Bahasa Indonesia"
                aria-label="Bahasa Indonesia"
              >
                <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-2xs border border-black/25 block">
                  <rect width="20" height="7" fill="#E11D48" />
                  <rect y="7" width="20" height="7" fill="#FFFFFF" />
                </svg>
              </button>

              {/* Bendera UK / English */}
              <button
                onClick={() => setLang('en')}
                className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white shadow-xs scale-105'
                    : 'opacity-55 hover:opacity-100 hover:bg-white/10'
                }`}
                title="English Language"
                aria-label="English Language"
              >
                <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-2xs border border-black/25 block">
                  <rect width="20" height="14" fill="#012169" />
                  <path d="M0,0 L20,14 M20,0 L0,14" stroke="#FFFFFF" strokeWidth="2.5" />
                  <path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" strokeWidth="1.5" />
                  <path d="M10,0 L10,14 M0,7 L20,7" stroke="#FFFFFF" strokeWidth="4" />
                  <path d="M10,0 L10,14 M0,7 L20,7" stroke="#C8102E" strokeWidth="2.4" />
                </svg>
              </button>
            </div>

            {/* Tombol Orange Pesan Paket */}
            <button
              onClick={onPlanTripClick}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <span>{t('Pesan Paket', 'Book Tour')}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer (Putih dengan font aktif biru) */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-sm mx-auto mt-2 bg-white text-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-bold py-2 px-3.5 rounded-full transition-colors ${
                  activeNav === link.id
                    ? 'text-sky-600 bg-sky-50 font-extrabold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-full shadow-md shadow-orange-500/30 transition-colors"
              >
                <span>{t('Pesan Paket Sekarang', 'Book Tour Now')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
