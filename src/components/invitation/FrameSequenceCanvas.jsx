import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INVITATION_STAGES = [
  { stage: 0, startFrame: 1,   endFrame: 33,  isAuto: true },
  { stage: 1, startFrame: 34,  endFrame: 102, isAuto: false },
  { stage: 2, startFrame: 103, endFrame: 201, isAuto: false },
  { stage: 3, startFrame: 202, endFrame: 310, isAuto: false },
];

const TOTAL_FRAMES = 310;
const FRAME_DURATION_MS = 33; // ~30 FPS for smooth playback

export const FrameSequenceCanvas = ({
  onComplete,
  onOpenCardPopout,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const animFrameIdRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Drag / touch interaction state
  const dragStartPos = useRef(null);
  const isDragging = useRef(false);

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const images = [];
    let loadedCount = 0;

    const initialBatchCount = 35;
    let initialBatchLoaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const padNum = String(i).padStart(3, '0');
      const src = `/invitation_frames/${padNum}.webp`;

      const img = new Image();
      images[i] = img;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

        if (i <= initialBatchCount) {
          initialBatchLoaded++;
          if (initialBatchLoaded >= initialBatchCount) {
            imagesRef.current = images;
            setIsLoading(false);
          }
        }
      };

      img.onerror = () => {
        img.src = `/invitation_frames/${padNum}.png`;
        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        };
      };

      img.src = src;
    }

    imagesRef.current = images;

    return () => {
      isMounted = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  // Draw frame on canvas with mobile high-DPI sharpness
  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameNum];
    if (!img || !img.complete) return;

    const width = 1280;
    const height = 720;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
  }, []);

  // Play animation range smoothly
  const playFrameRange = useCallback((fromFrame, toFrame, onEnd) => {
    setIsPlaying(true);
    let curr = fromFrame;
    let lastTimestamp = performance.now();

    const step = (now) => {
      const elapsed = now - lastTimestamp;

      if (elapsed >= FRAME_DURATION_MS) {
        lastTimestamp = now - (elapsed % FRAME_DURATION_MS);
        curr += (toFrame >= fromFrame ? 1 : -1);

        setCurrentFrameIndex(curr);
        drawFrame(curr);

        if ((toFrame >= fromFrame && curr >= toFrame) || (toFrame < fromFrame && curr <= toFrame)) {
          setIsPlaying(false);
          if (onEnd) onEnd();
          return;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(step);
    };

    animFrameIdRef.current = requestAnimationFrame(step);
  }, [drawFrame]);

  // Initial Auto-Play: Frames 1 to 33
  useEffect(() => {
    if (!isLoading && currentStageIndex === 0 && currentFrameIndex === 1) {
      drawFrame(1);
      
      const autoTimer = setTimeout(() => {
        playFrameRange(1, 33, () => {
          setCurrentStageIndex(0);
        });
      }, 350);

      return () => clearTimeout(autoTimer);
    }
  }, [isLoading, currentStageIndex, currentFrameIndex, drawFrame, playFrameRange]);

  // Trigger next stage on user action
  const triggerNextStage = useCallback(() => {
    if (isPlaying || isLoading) return;

    // When at final frame (310), click opens full screen card
    if (isCompleted) {
      if (onOpenCardPopout) onOpenCardPopout();
      return;
    }

    const nextStageIdx = currentStageIndex + 1;

    if (nextStageIdx < INVITATION_STAGES.length) {
      const nextStageConfig = INVITATION_STAGES[nextStageIdx];
      const startF = nextStageConfig.startFrame;
      const endF = nextStageConfig.endFrame;

      setCurrentStageIndex(nextStageIdx);
      playFrameRange(startF, endF, () => {
        if (nextStageIdx === INVITATION_STAGES.length - 1) {
          setIsCompleted(true);
          if (onComplete) onComplete();
        }
      });
    }
  }, [isPlaying, isLoading, isCompleted, currentStageIndex, playFrameRange, onComplete, onOpenCardPopout]);

  // Universal Pointer & Touch Handlers
  const handlePointerDown = (e) => {
    if (isPlaying) return;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (!dragStartPos.current || isPlaying) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 12) {
      isDragging.current = true;
    }
  };

  const handlePointerUp = (e) => {
    if (isPlaying) return;
    if (dragStartPos.current) {
      triggerNextStage();
    }
    dragStartPos.current = null;
    isDragging.current = false;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full flex flex-col items-center select-none ${className}`}
    >
      
      {/* ── Screen Frame & Canvas Container with Mobile Responsive Aspect Ratio ── */}
      <div 
        className="relative w-full aspect-[16/9] max-h-[75vh] sm:max-h-[82vh] rounded-xl sm:rounded-2xl overflow-hidden bg-black/95 border border-white/20 hover:border-white/40 active:border-white/50 shadow-[0_0_25px_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.9)] transition-colors duration-300 cursor-pointer touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
          </div>
        )}

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain block select-none pointer-events-none"
        />

        {/* Final Frame Center Text: "click to view the invitation" (Fully mobile responsive) */}
        <AnimatePresence>
          {!isLoading && !isPlaying && isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none"
            >
              <motion.span
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="font-['Cormorant_Garamond',_'Playfair_Display',_serif] italic text-xs sm:text-base md:text-xl tracking-[0.16em] sm:tracking-[0.22em] text-neutral-200 font-normal px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/20 shadow-2xl drop-shadow-md text-center"
              >
                click to view the invitation
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Text below the frame: "click on the frame" (Mobile friendly padding & font size) */}
      <div className="h-7 sm:h-8 flex items-center justify-center mt-2 sm:mt-3">
        <AnimatePresence>
          {!isLoading && !isPlaying && !isCompleted && (
            <motion.p
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-['Cormorant_Garamond',_'Playfair_Display',_serif] italic text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 font-normal animate-pulse select-none text-center"
            >
              click on the frame
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
