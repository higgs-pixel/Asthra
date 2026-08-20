import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

// ─── Cloudinary video config ───────────────────────────────────────────────
const CLOUD_NAME = 'shpjbioq';
const PUBLIC_ID  = 'ksr_tnzhtp';

const VIDEO_THUMBNAIL = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,w_800,q_auto,f_jpg/${PUBLIC_ID}.jpg`;
const VIDEO_URL       = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/${PUBLIC_ID}.mp4`;

// ─── Full-screen Video Modal ───────────────────────────────────────────────
const VideoModal = ({ onClose }) => (
  <AnimatePresence>
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cloudinary iframe player — full controls */}
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://player.cloudinary.com/embed/?cloud_name=${CLOUD_NAME}&public_id=${PUBLIC_ID}&fluid=true&controls=true&autoplay=true&muted=false&loop=true`}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="KSR College Video"
          />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// ─── Video Thumbnail Card ──────────────────────────────────────────────────
const VideoCard = ({ onDoubleClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    onDoubleClick={onDoubleClick}
    className="relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-xl hover:shadow-accent-primary/20 hover:border-accent-primary/30 transition-all duration-300"
    title="Double-click to play"
  >
    {/* Inline autoplay video (muted — browser requires this for autoplay) */}
    <div className="aspect-video w-full bg-black relative overflow-hidden">
      <video
        src={VIDEO_URL}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={VIDEO_THUMBNAIL}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Muted badge */}
      {/* <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs font-bold text-white/60 pointer-events-none">
        <VolumeX className="w-3.5 h-3.5" />
        Muted
      </div> */}

      {/* Double-click hint overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-14 pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs font-semibold text-white/60 backdrop-blur-sm">
          <Play className="w-1.5 h-1.5" />
          Double-click for full player with audio
        </div>
      </div>
    </div>

    {/* Bottom caption */}
    <div className="absolute bottom-0 inset-x-0 px-5 py-4 flex items-center justify-between pointer-events-none">
      <div>
        <p className="text-white font-bold text-sm">KSR College of Engineering</p>
        <p className="text-white/50 text-xs">Tiruchengode, Nammakkal</p>
      </div>
      {/* <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-accent-glow text-xs font-black uppercase tracking-widest">
        <Volume2 className="w-3 h-3" />
        Full Audio on click
      </div> */}
    </div>
  </motion.div>
);

// ─── Cloudinary Embed Video Card Component ──────────────────────────────────
const CloudinaryEmbedCard = ({
  cloudName = 'shpjbioq',
  publicId,
  title = 'Symposium Video',
  delay = 0.1,
  aspectRatio = 'portrait', // 'portrait' (9/16) or 'landscape' (16/9)
}) => {
  const [muted, setMuted] = useState(true);
  const isPortrait = aspectRatio === 'portrait' || aspectRatio === '9/16';

  const iframeSrc = `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&fluid=true&controls=true&autoplay=true&muted=${muted}&loop=true`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-accent-primary/20 hover:border-accent-primary/30 transition-all duration-300 bg-black ${
        isPortrait ? 'w-full max-w-sm mx-auto' : 'w-full'
      }`}
    >
      {/* Mute / Unmute toggle */}
      <button
        onClick={() => setMuted(prev => !prev)}
        className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-xs font-semibold backdrop-blur-md hover:bg-white/20 transition-colors shadow-lg"
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        <span>{muted ? 'Unmute' : 'Mute'}</span>
      </button>

      {/* Cloudinary embed iframe with responsive ratio */}
      <div className={`w-full bg-black ${isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <iframe
          key={String(muted)}
          src={iframeSrc}
          style={{
            height: '100%',
            width: '100%',
            aspectRatio: isPortrait ? '9 / 16' : '16 / 9',
            display: 'block'
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="w-full h-full"
          title={title}
        />
      </div>
    </motion.div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────
export const GalleryPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          eyebrow="CAMPUS & SYMPOSIUM GLIMPSE"
          title="KSRCE & ASTHRA"
          highlight="Gallery"
          subtitle="Explore campus glimpse, keynotes, promos, and symposium celebration highlights."
        />

        {/* ── Featured Video (full-width) ── */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Play className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-black text-text-muted uppercase tracking-widest">Featured Video</span>
          </div>
          <VideoCard onDoubleClick={() => setVideoOpen(true)} />
        </div>

        {/* ── Symposium Highlights & Reels ── */}
        <div className="mb-14 space-y-8">
          <div className="flex items-center gap-2 mb-5">
            <Play className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-black text-text-muted uppercase tracking-widest">
              Symposium Highlights & Reels
            </span>
          </div>

          {/* Row 1: Promo Reel (Portrait) + Highlights (Landscape) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 w-full flex justify-center">
              <CloudinaryEmbedCard
                cloudName="shpjbioq"
                publicId="IMG_8914_j7a4d7"
                title="ASTHRA Promo Reel"
                aspectRatio="portrait"
                delay={0.1}
              />
            </div>
            <div className="lg:col-span-7 w-full flex justify-center">
              <CloudinaryEmbedCard
                cloudName="shpjbioq"
                publicId="IMG_1384_vtrsvy"
                title="ASTHRA Symposium Highlights"
                aspectRatio="landscape"
                delay={0.2}
              />
            </div>
          </div>

          {/* Row 2: Highlights 2 (Landscape) + Celebration Reel (Portrait) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 w-full flex justify-center order-2 lg:order-1">
              <CloudinaryEmbedCard
                cloudName="shpjbioq"
                publicId="video_3_rdb1sr"
                title="ASTHRA Symposium Highlights 2026"
                aspectRatio="landscape"
                delay={0.3}
              />
            </div>
            <div className="lg:col-span-5 w-full flex justify-center order-1 lg:order-2">
              <CloudinaryEmbedCard
                cloudName="shpjbioq"
                publicId="VID_20260811_214802_siczwy"
                title="ASTHRA Symposium Portrait Reel"
                aspectRatio="portrait"
                delay={0.4}
              />
            </div>
          </div>

          {/* Row 3: Event Highlights Glimpse (Landscape) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-12 w-full max-w-5xl mx-auto flex justify-center">
              <CloudinaryEmbedCard
                cloudName="shpjbioq"
                publicId="IMG_4486_m8k8kz"
                title="ASTHRA Symposium Event Moments"
                aspectRatio="landscape"
                delay={0.5}
              />
            </div>
          </div>
        </div>

       

      </div>

      {/* ── Video Modal ── */}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </div>
  );
};

