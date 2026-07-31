import React from 'react';
import { ACCREDITATIONS } from '../../data/symposiumData';

export const AccreditationsSection = () => {
  const tickerItems = [...ACCREDITATIONS, ...ACCREDITATIONS, ...ACCREDITATIONS];

  return (
    <div className="relative py-8 bg-bg-surface/60 border-y border-white/[0.08] overflow-hidden backdrop-blur-md">
      {/* Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="flex items-center mb-3 justify-center">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted">
          Accreditations, Affiliations & Institutional Recognitions
        </span>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex gap-10 items-center animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-primary/40 hover:bg-white/[0.05] transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-xs font-bold text-text-primary tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
