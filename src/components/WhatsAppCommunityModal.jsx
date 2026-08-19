import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Copy, 
  Check, 
  Users, 
  Sparkles, 
  Cpu, 
  Gamepad2, 
  FileText, 
  Bot, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/symposiumData';

export const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/Gi4POwewvea4l31VNdB8W8";

export const WhatsAppCommunityModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Pops up smoothly from center when the website is opened or refreshed
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_COMMUNITY_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const eventSubgroups = [
    {
      title: "Technical Events Hub",
      desc: "AI Prompt Sprint, Bug Blitz, Idea Pitch & Code Insight",
      icon: Cpu,
      color: "text-accent-glow bg-accent-primary/10 border-accent-primary/20",
    },
    {
      title: "Non-Technical Events Hub",
      desc: "Chess Arena, Meme Sprint, Snap Rush & Guess The Beat",
      icon: Gamepad2,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Agentic AI Workshop Hub",
      desc: "Day 2 hands-on session labs, resource links & Q&A",
      icon: Bot,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Paper Presentation Hub",
      desc: "PPT tracks, schedule slots, templates & jury alerts",
      icon: FileText,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <>
      {/* Floating Action Launcher Button (Allows reopening anytime) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-[#25D366] to-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all border border-emerald-400/30 backdrop-blur-md"
          aria-label="Open WhatsApp Community Modal"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.53 1.777.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.767-5.77-5.767zm7.551 5.767c-.002 4.157-3.386 7.539-7.552 7.539-1.306 0-2.533-.339-3.606-.933l-4.424 1.159 1.183-4.316c-.66-1.111-1.04-2.404-1.04-3.449.002-4.157 3.386-7.54 7.552-7.54 4.167 0 7.55 3.383 7.551 7.54zm-3.31 2.261c-.183-.092-1.082-.534-1.25-.595-.168-.061-.29-.092-.412.092-.122.183-.473.595-.58.717-.107.122-.214.137-.397.046-.183-.092-.773-.285-1.472-.908-.544-.485-.911-1.084-1.018-1.267-.107-.183-.011-.282.08-.373.082-.082.183-.214.275-.32.092-.107.122-.183.183-.305.061-.122.031-.229-.015-.32-.046-.092-.412-.992-.565-1.36-.149-.357-.3-.308-.412-.314-.107-.005-.229-.006-.351-.006-.122 0-.32.046-.488.229-.168.183-.641.626-.641 1.527s.656 1.77 1.748 2.862c1.092 1.092 2.94 2.228 4.489 2.473.498.079.887.063 1.222-.044.373-.119 1.144-.468 1.307-.92.163-.452.163-.84.114-.92-.048-.08-.17-.128-.353-.22z"/>
          </svg>
          <span className="hidden sm:inline tracking-wide">WhatsApp Community</span>
        </motion.button>
      </div>

      {/* Center Pop Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Container: Pops and scales up directly from center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  damping: 24, 
                  stiffness: 280,
                  mass: 0.8
                } 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.7, 
                y: 15, 
                transition: { duration: 0.2, ease: "easeInOut" } 
              }}
              className="relative w-full max-w-xl rounded-3xl bg-bg-surface/95 border border-white/15 p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 backdrop-blur-2xl"
            >
              {/* Decorative radial glows */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent-primary/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-text-muted hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Icon, Badge & Title */}
              <div className="flex flex-col items-center text-center space-y-3 pt-1">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#0c1e14] flex items-center justify-center">
                      <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.53 1.777.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.767-5.77-5.767zm7.551 5.767c-.002 4.157-3.386 7.539-7.552 7.539-1.306 0-2.533-.339-3.606-.933l-4.424 1.159 1.183-4.316c-.66-1.111-1.04-2.404-1.04-3.449.002-4.157 3.386-7.54 7.552-7.54 4.167 0 7.55 3.383 7.551 7.54zm-3.31 2.261c-.183-.092-1.082-.534-1.25-.595-.168-.061-.29-.092-.412.092-.122.183-.473.595-.58.717-.107.122-.214.137-.397.046-.183-.092-.773-.285-1.472-.908-.544-.485-.911-1.084-1.018-1.267-.107-.183-.011-.282.08-.373.082-.082.183-.214.275-.32.092-.107.122-.183.183-.305.061-.122.031-.229-.015-.32-.046-.092-.412-.992-.565-1.36-.149-.357-.3-.308-.412-.314-.107-.005-.229-.006-.351-.006-.122 0-.32.046-.488.229-.168.183-.641.626-.641 1.527s.656 1.77 1.748 2.862c1.092 1.092 2.94 2.228 4.489 2.473.498.079.887.063 1.222-.044.373-.119 1.144-.468 1.307-.92.163-.452.163-.84.114-.92-.048-.08-.17-.128-.353-.22z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full bg-emerald-500 text-black border-2 border-bg-surface">
                    Live
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{SYMPOSIUM_INFO.name} Community</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-text-primary">
                    Join Our WhatsApp Community
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Join our central WhatsApp community to get instant updates and connect directly with your <span className="text-emerald-400 font-semibold">respective event groups</span>!
                  </p>
                </div>
              </div>

              {/* Event Sub-Groups Overview */}
              <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {eventSubgroups.map((group, idx) => {
                  const Icon = group.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-3"
                    >
                      <div className={`p-2 rounded-xl border shrink-0 ${group.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-text-primary">
                          {group.title}
                        </div>
                        <p className="text-[11px] text-text-muted truncate">
                          {group.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Link Display & Copy Button */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 mb-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-text-secondary truncate select-all">
                    {WHATSAPP_COMMUNITY_URL}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-text-primary text-xs font-semibold transition-all border border-white/10 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Main Call To Action Button */}
              <div className="space-y-3">
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>👉 Join Official WhatsApp Community</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center text-xs text-text-muted pt-1">
                  <button
                    onClick={handleClose}
                    className="text-xs text-text-muted hover:text-text-primary transition-colors hover:underline underline-offset-4 py-1 px-3"
                  >
                    I'll join later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
