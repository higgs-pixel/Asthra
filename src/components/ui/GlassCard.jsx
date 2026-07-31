import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  shimmer = true,
  onClick,
  ...props
}) => {
  const baseClasses = `
    relative rounded-2xl p-6 md:p-8 
    bg-white/[0.03] backdrop-blur-xl 
    border border-white/[0.08] 
    transition-all duration-300 ease-out
    ${shimmer ? 'glass-shimmer' : ''}
    ${hoverEffect ? 'hover:bg-white/[0.06] hover:border-accent-primary/50 hover:shadow-card-glow' : ''}
    ${glow ? 'shadow-glass-glow border-accent-primary/40 neon-border-pulse' : ''}
    ${className}
  `;

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -6, scale: 1.015 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={baseClasses}
      {...props}
    >
      {/* Top Right Ambient Corner Sheen */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/[0.08] via-accent-primary/10 to-transparent rounded-tr-2xl pointer-events-none" />

      {/* Bottom Left Subtle Glow */}
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-accent-primary/10 to-transparent rounded-bl-2xl pointer-events-none" />

      {children}
    </motion.div>
  );
};
