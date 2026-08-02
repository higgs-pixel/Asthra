import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { GlassCard } from '../ui/GlassCard';
import { SYMPOSIUM_INFO } from '../../data/symposiumData';
import { Link } from 'react-router-dom';
import ksrLogo from '../../assets/ksr-logo.png';
import asthraLogo from '../../assets/asthra-logo.jpg';

const LOOP_START = 20; // seconds

export const HeroSection = () => {
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    const seekAndPlay = () => {
      video.currentTime = LOOP_START;
      video.play().catch(() => {});
    };

    // If metadata is already loaded (e.g. cached), seek immediately
    if (video.readyState >= 1) {
      seekAndPlay();
    } else {
      video.addEventListener('loadedmetadata', seekAndPlay, { once: true });
    }

    const handleEnded = () => {
      video.currentTime = LOOP_START;
      video.play().catch(() => {});
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('loadedmetadata', seekAndPlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-bg">

      {/* Background Video — Cloudinary direct URL, starts & loops from 20s */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={bgVideoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            opacity: 0.45,
          }}
        >
          <source
            src="https://res.cloudinary.com/shpjbioq/video/upload/q_auto/IMG_1384_vtrsvy.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay & backdrop blur for visual hierarchy & contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/65 to-bg" />
      </div>

      {/* Dynamic Floating Background Particles / Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-accent-primary via-accent-glow to-accent-secondary rounded-full blur-[180px] opacity-30 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-glow rounded-full blur-[160px] opacity-20 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-cyan/15 rounded-full blur-[150px] pointer-events-none animate-float" />

      {/* Grid & Cyber Dot Pattern Overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">

          {/* Offer Alerts Ticker Wrapper */}
          <div className="w-full max-w-5xl mx-auto mb-10 mt-6 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full relative flex items-center bg-white/[0.03] border border-white/10 rounded-full h-12 shadow-glass-glow overflow-hidden"
            >
              {/* "Offers Alerts" Static Label (Properly positioned without overlap) */}
              <div className="z-20 flex items-center px-6 h-full bg-accent-primary/20 border-r border-accent-primary/30 backdrop-blur-md">
                <span className="text-xs font-black uppercase tracking-widest text-accent-glow whitespace-nowrap">
                  Offers Alerts
                </span>
              </div>

              {/* Marquee Ticker */}
              <div className="flex-1 overflow-hidden h-full flex items-center pl-6">
                <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max">
                  {/* Text needs to be duplicated to ensure smooth infinite scrolling for translateX(-50%) */}
                  <div className="flex gap-8 px-4 items-center">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                        <span className="text-accent-cyan">💥</span> Register for Paper Presentation <span className="text-accent-primary">●</span> Get one Non Technical Event Free <span className="text-white/30 mx-2">|</span> Register for 2 Technical Events <span className="text-accent-primary">●</span> Get one Non Technical Event Free <span className="text-accent-cyan">💥</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>



          {/* Top Institution & Department Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 mb-5 shadow-2xl hover:scale-105 transition-all"
          >
            <img src={ksrLogo} alt="KSR College of Engineering" className="h-7 sm:h-9 object-contain" />
            <div className="h-5 w-px bg-slate-300 hidden sm:block" />
            <span className="text-xs md:text-sm font-bold text-slate-800 hidden sm:inline-block">
              {SYMPOSIUM_INFO.department}
            </span>
          </motion.div>

          {/* Presenter Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-glow text-xs font-mono font-bold uppercase tracking-widest border border-accent-primary/30 shadow-md">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
              {SYMPOSIUM_INFO.association} Proudly Presents
            </span>
          </motion.div>

          {/* CENTERPIECE: ANIMATED ASTHRA EMBLEM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 180 }}
            className="relative my-4 flex items-center justify-center group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-primary/25 via-accent-cyan/15 to-accent-secondary/25 blur-2xl opacity-40 group-hover:opacity-65 transition-opacity duration-700 scale-125" />

              <motion.div
                animate={{ scale: [1, 1.25, 1.4], opacity: [0.3, 0.15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-accent-primary/40 pointer-events-none"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-dashed border-accent-cyan/35 pointer-events-none"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F0FF] absolute -top-1 left-1/2 -translate-x-1/2" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dotted border-accent-primary/35 pointer-events-none"
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-b from-white/20 via-accent-primary/30 to-accent-secondary/20 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-bg-surface/90 flex items-center justify-center p-3 border border-white/10 relative z-10 shadow-inner">
                  <img
                    src={asthraLogo}
                    alt="ASTHRA Symposium Official Logo"
                    className="w-full h-full object-contain rounded-full mix-blend-lighten group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-text-primary leading-[1.05] max-w-5xl"
          >
            {SYMPOSIUM_INFO.name}{' '}
            <span className="text-gradient">
            
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-lg md:text-2xl font-extrabold uppercase tracking-wider text-accent-glow"
          >
            {SYMPOSIUM_INFO.subTitle}
          </motion.p>

          {/* Academic Celebration Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold backdrop-blur-md shadow-md"
          >
            <Award className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>{SYMPOSIUM_INFO.celebration}</span>
          </motion.div>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/events">
              <GradientButton variant="secondary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                View All Events
              </GradientButton>
            </Link>
          </motion.div>

          {/* Registration Deadline Alert */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted bg-white/[0.03] px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl shadow-lg"
          >
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Registration Deadline: {SYMPOSIUM_INFO.registrationDeadline}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-accent-glow font-bold">
              Paper Submission: {SYMPOSIUM_INFO.paperSubmissionDeadline}
            </span>
          </motion.div>
        </div>

        {/* Floating Glass Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Card 1: Day 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="animate-float"
            style={{ animationDuration: '7s' }}
          >
            <GlassCard className="flex flex-col justify-between h-full group" glow>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-[11px] font-extrabold uppercase rounded bg-accent-primary/20 text-accent-glow border border-accent-primary/30">
                  DAY 1 · 21.08.2026
                </span>
                
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-glow transition-colors">
                Paper Presentation &amp; Events
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Theme: Emerging IT Technologies &amp; Future Trends in Computing. 4 Technical &amp; 4 Non-Technical events.
              </p>
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-accent-primary">
          
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Day 2 Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="animate-float"
            style={{ animationDuration: '8s', animationDelay: '1s' }}
          >
            <GlassCard className="flex flex-col justify-between h-full group border-accent-secondary/40 shadow-glass-glow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-[11px] font-extrabold uppercase rounded bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30">
                  DAY 2 · 22.08.2026
                </span>
      
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-glow transition-colors">
                Agentic AI &amp; Cloud Workshop
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Driving Digital Transformation in the Digital Era through Agentic AI and Cloud-Native Development.
              </p>
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-accent-secondary">
              
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Venue Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="animate-float"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          >
            <GlassCard className="flex flex-col justify-between h-full group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-[11px] font-extrabold uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  CAMPUS VENUE
                </span>
                <span className="text-xs font-bold text-text-muted">Tiruchengode</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                KSR College of Engineering
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Department of IT ( D Block )
              </p>
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-text-muted">
                <span>NAAC Accredited A++</span>
                <MapPin className="w-4 h-4 text-accent-primary" />
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
