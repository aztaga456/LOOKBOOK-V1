'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { lang, t } = useLanguage();

  const renderCard = (tItem: (typeof TESTIMONIALS)[0], key: string | number) => (
    <div
      key={key}
      className="w-[340px] sm:w-[390px] flex-shrink-0 bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between select-text"
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(tItem.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="text-slate-700 text-[13.5px] sm:text-sm leading-relaxed italic mb-6">
          &ldquo;{tItem.comment[lang]}&rdquo;
        </p>
      </div>

      {/* User Info Bar */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 ring-2 ring-sky-100">
          <Image
            src={tItem.avatar}
            alt={tItem.name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-slate-900 leading-tight truncate">
            {tItem.name}
          </span>
          <span className="text-xs text-slate-500 truncate mt-0.5">
            {tItem.origin} · <span className="text-sky-600 font-medium">{tItem.package}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-sky-600 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
              {t('ULASAN WISATAWAN', 'TRAVELER REVIEWS')}
            </span>
            <span className="w-6 h-[2px] bg-sky-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('Cerita & Pengalaman', 'Stories & Reviews from')}{' '}
            <span className="text-sky-600">
              {t('Wisatawan Kami', 'Our Guests')}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t(
              'Kepuasan wisatawan yang telah menikmati liburan bersama Lombok Partner.',
              'Real experiences from travelers who explored Lombok with Lombok Partner.'
            )}
          </p>
        </div>
      </div>

      {/* Auto-scrolling Continuous Carousel Container */}
      <div className="relative w-full overflow-hidden marquee-group py-3">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Marquee Track: Duplicated sets create 100% seamless infinite scroll */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 gap-6 pr-6 animate-marquee-infinite">
            {TESTIMONIALS.map((tItem, idx) => renderCard(tItem, `testi-1-${idx}`))}
          </div>
          <div className="flex shrink-0 gap-6 pr-6 animate-marquee-infinite" aria-hidden="true">
            {TESTIMONIALS.map((tItem, idx) => renderCard(tItem, `testi-2-${idx}`))}
          </div>
        </div>
      </div>

      {/* Helpful Hint */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-center">
        <p className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
          <MessageSquareHeart className="w-3.5 h-3.5 text-sky-500" />
          {t('Arahkan kursor atau sentuh untuk menjeda ulasan', 'Hover or tap to pause reviews')}
        </p>
      </div>
    </section>
  );
}

