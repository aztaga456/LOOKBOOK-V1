'use client';

import React, { useState } from 'react';
import { Play, X, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface VideoBannerProps {
  onWatchVideo?: () => void;
}

export default function VideoBanner({ onWatchVideo }: VideoBannerProps) {
  const { t } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlayClick = () => {
    if (onWatchVideo) {
      onWatchVideo();
    } else {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <section id="video-banner" className="w-full relative overflow-hidden my-8 sm:my-14">
      {/* Full-width Panoramic Container without boxed constraints */}
      <div className="relative w-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 group">
        
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-sky-950/65 to-slate-950/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/50 z-10 pointer-events-none" />

        {/* Banner Content Grid Centered in 7xl */}
        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-white">
          
          {/* Left Tagline: "SINEMATIK PULAU LOMBOK" */}
          <div className="md:col-span-4 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 block mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              {t('SINEMATIK PULAU LOMBOK', 'LOMBOK CINEMATIC')}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {t('Petualangan Terbaik', 'Your Next Adventure')}<br />
              <span className="italic font-serif text-sky-200">
                {t('Dimulai Di Sini', 'Begins Right Here')}
              </span>
            </h3>
          </div>

          {/* Center Glowing Play Button */}
          <div className="md:col-span-4 flex items-center justify-center">
            <div className="relative">
              <span className="absolute -inset-3 rounded-full bg-white/20 animate-ping opacity-60 pointer-events-none" />
              <button
                onClick={handlePlayClick}
                aria-label="Putar Video Lombok"
                className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border-2 border-white/80 bg-white/25 hover:bg-white/40 active:bg-white/50 backdrop-blur-xl shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group/btn cursor-pointer"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-white ml-1 transition-transform group-hover/btn:scale-110" />
              </button>
            </div>
          </div>

          {/* Right Subtitle & Description */}
          <div className="md:col-span-4 text-center md:text-right">
            <p className="text-xs sm:text-sm text-slate-100/90 leading-relaxed font-normal max-w-sm mx-auto md:ml-auto">
              {t(
                'Saksikan kilau terumbu karang 3 Gili, kemegahan bukit savana Mandalika, dan kesegaran air terjun dari udara.',
                'Discover incredible island destinations and unforgettable experiences with Lombok Partner.'
              )}
            </p>
            <span className="inline-block mt-3 text-[11px] font-bold text-sky-300 tracking-wider uppercase">
              {t('OFFICIAL VIDEO 4K UHD', 'OFFICIAL VIDEO 4K UHD')}
            </span>
          </div>

        </div>

      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Tutup Video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/g2g-8_67-pU?autoplay=1"
                title="Lombok Cinematic Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
