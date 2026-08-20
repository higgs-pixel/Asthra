import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { FrameSequenceCanvas } from './invitation/FrameSequenceCanvas';
import { BlossomFallingLeaves } from './invitation/BlossomFallingLeaves';

export const InvitationCardModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardPopoutOpen, setIsCardPopoutOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('asthra_invitation_seen');

    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCardPopoutOpen(false);
    localStorage.setItem('asthra_invitation_seen', 'true');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCardPopoutOpen(false);
  };

  const handleOpenCardPopout = () => {
    setIsCardPopoutOpen(true);
  };

  const handleCloseCardPopout = () => {
    setIsCardPopoutOpen(false);
  };

  return (
    <>
      {/* Floating Re-Open Launcher Button (Mobile Optimized Placement) */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <motion.button
          onClick={handleOpenModal}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-black/90 border border-white/20 hover:border-amber-400/60 active:border-amber-400 text-amber-200 shadow-2xl backdrop-blur-md transition-all cursor-pointer select-none"
          aria-label="View 3D Invitation"
          title="Open ASTHRA 2K26 3D Invitation"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          <span className="text-[11px] sm:text-xs tracking-wider font-['Cinzel',_serif]">
            Invitation
          </span>
        </motion.button>
      </div>

      {/* Main 3D Frame Modal (Fully Mobile Compatible) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={handleCloseModal}
            />

            {/* Frame Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl flex flex-col items-center my-auto"
            >
              {/* Minimal Responsive Close (X) Button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-9 right-1 sm:-top-10 sm:right-0 p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white active:text-white bg-black/70 hover:bg-black border border-white/15 hover:border-white/40 backdrop-blur-md transition-all cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-4 sm:h-4" />
              </button>

              {/* 3D Frame Sequence Player */}
              <FrameSequenceCanvas
                onOpenCardPopout={handleOpenCardPopout}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Pop-Out Card Overlay with Falling Blossom Animation (Mobile Responsive) ── */}
      <AnimatePresence>
        {isCardPopoutOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-2.5 sm:p-6 overflow-hidden">
            {/* Falling Blossom Petals Animation Canvas */}
            <BlossomFallingLeaves />

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
              onClick={handleCloseCardPopout}
            />

            {/* Pop-Out Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.65, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.65, y: 25 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 max-w-[94vw] max-h-[88vh] flex flex-col items-center pointer-events-auto"
            >
              {/* Responsive Close Button */}
              <button
                onClick={handleCloseCardPopout}
                className="absolute -top-10 sm:-top-11 right-0 p-1.5 sm:p-2 rounded-full bg-black/80 hover:bg-black text-white/80 hover:text-white active:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer z-30"
                aria-label="Close Full Card"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Full Card Image with light border & touch support */}
              <div 
                onClick={handleCloseModal}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/25 hover:border-white/50 shadow-[0_0_50px_rgba(255,192,203,0.15),0_20px_50px_rgba(0,0,0,0.95)] max-h-[80vh] sm:max-h-[85vh] flex items-center justify-center bg-black/50 cursor-pointer"
                title="Tap to enter website"
              >
                <img
                  src="/card.png"
                  alt="ASTHRA 2K26 Invitation Card"
                  className="w-auto h-auto max-h-[80vh] sm:max-h-[85vh] max-w-[92vw] sm:max-w-full object-contain select-none block"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
