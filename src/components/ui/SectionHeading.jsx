import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-16 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent-primary/10 border border-accent-primary/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
