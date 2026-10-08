'use client';

import React from 'react';
import { ShieldCheck, Award, Users2, Clock4 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyUsSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      title: t('100% Legal & Terpercaya', '100% Legal & Trusted'),
      description: t(
        'Biro perjalanan wisata resmi berizin di Lombok dengan rekam jejak ribuan wisatawan puas.',
        'Licensed official tour & travel operator in Lombok with thousands of satisfied travelers.'
      ),
    },
    {
      icon: Users2,
      title: t('Pemandu Lokal Berlisensi', 'Licensed Local Guides'),
      description: t(
        'Didampingi guide putra daerah Sasak yang ramah, berwawasan luas, dan menguasai rute terbaik.',
        'Accompanied by friendly local Sasak guides who know the island’s best spots.'
      ),
    },
    {
      icon: Award,
      title: t('Armada Nyaman & Terawat', 'Clean & Modern Vehicles'),
      description: t(
        'Kendaraan pribadi full AC (All New Avanza / Hiace), bersih, dengan standar keselamatan tinggi.',
        'Clean, air-conditioned private vehicles (All New Avanza, Hiace) with top safety standards.'
      ),
    },
    {
      icon: Clock4,
      title: t('Pelayanan Ramah 24/7', '24/7 Friendly Service'),
      description: t(
        'Tim customer care siap melayani konsultasi jadwal dan custom trip Anda kapan saja.',
        'Our customer support is always ready to assist with custom itineraries anytime.'
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-sky-600 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
              {t('MENGAPA MEMILIH LOMBOK PARTNER', 'WHY CHOOSE LOMBOK PARTNER')}
            </span>
            <span className="w-6 h-[2px] bg-sky-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('Keunggulan Layanan', 'Professional Service')}{' '}
            <span className="text-sky-600">
              {t('Profesional Kami', 'Excellence')}
            </span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t(
              'Liburan Nyaman, Bersama Lombok Partner. Standar pelayanan terbaik untuk perjalanan tanpa rasa khawatir.',
              'Comfortable vacations with Lombok Partner. Dedicated service ensuring a seamless travel experience.'
            )}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-start group"
              >
                <div className="w-13 h-13 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
