import React from 'react';
import { motion } from 'framer-motion';

export const GradientButton = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-sm font-bold',
    lg: 'px-8 py-4 text-base font-extrabold',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] animate-gradient-text text-white shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/60 border border-white/20',
    secondary: 'bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 border border-white/15 hover:border-white/40 shadow-lg',
    outline: 'bg-transparent text-text-primary border border-white/20 hover:border-accent-primary hover:text-accent-glow hover:bg-accent-primary/10 shadow-sm',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center gap-2 rounded-full 
        transition-all duration-300 cursor-pointer overflow-hidden glass-shimmer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </motion.button>
  );
};
