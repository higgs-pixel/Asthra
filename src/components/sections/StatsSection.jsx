import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const STATS = [
  { value: 25, label: "Years Academic Excellence", suffix: " Yrs" },
  { value: 4, label: "Technical Competitions", suffix: "" },
  { value: 4, label: "Non-Technical Events", suffix: "" },
  { value: 2, label: "Action-Packed Days", suffix: " Days" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-bg-surface/80 border-y border-white/[0.08] relative overflow-hidden backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-accent-primary/30 transition-all"
            >
              <div className="text-3xl sm:text-5xl font-black text-gradient mb-2 tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-text-secondary uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
