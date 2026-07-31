import React from 'react';

export const Badge = ({ children, variant = 'purple', className = '' }) => {
  const variantStyles = {
    purple: 'bg-accent-primary/10 border-accent-primary/30 text-accent-glow',
    blue: 'bg-accent-secondary/10 border-accent-secondary/30 text-accent-secondary',
    green: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    gold: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
