'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function VideoBanner() {
  const { t } = useLanguage();

  return (
    <section id="video-banner" className="w-full relative overflow-hidden my-8 sm:my-14">
      {/* Full-width Panoramic Container without boxed constraints */}
      <div className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[290px] flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 group">
        
        {/* Full Bleed Autoplay Continuous Sample Beach Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm/1280px--Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm.jpg"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-110"
          >
            <source
              src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c6/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm.480p.vp9.webm"
              type="video/webm"
            />
            <source
              src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c6/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm.720p.vp9.webm"
              type="video/webm"
            />
          </video>
        </div>

        {/* Ambient Frosted Dark Teal & Oceanic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/60 to-slate-950/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/45 z-10 pointer-events-none" />

        {/* Banner Content Centered in 7xl */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-white">
          
          {/* Main Title Left */}
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {t('Petualangan Terbaik', 'Your Next Adventure')}{' '}
              <span className="italic font-serif text-sky-200 block sm:inline">
                {t('Dimulai Di Sini', 'Begins Right Here')}
              </span>
            </h3>
          </div>

          {/* Subtitle Description Right */}
          <div className="text-center md:text-right max-w-md">
            <p className="text-xs sm:text-sm md:text-base text-slate-100/90 leading-relaxed font-normal">
              {t(
                'Saksikan kilau terumbu karang 3 Gili, kemegahan bukit savana Mandalika, dan kesegaran air terjun dari udara.',
                'Discover incredible island destinations and unforgettable experiences with Lombok Partner.'
              )}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

