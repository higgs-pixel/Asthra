import React from 'react';
import { motion } from 'framer-motion';
import { Image, Award } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GALLERY_IMAGES } from '../data/symposiumData';

export const GalleryPage = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <SectionHeading
          eyebrow="CAMPUS & SYMPOSIUM GLIMPSE"
          title="KSRCE & ASTHRA"
          highlight="Gallery"
          subtitle="Explore photos of our state-of-the-art campus, computer laboratories, keynotes, and past symposium celebrations."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-24"
        >
          <GlassCard className="p-12 md:p-16 text-center border-accent-primary/20 shadow-glass-glow max-w-2xl w-full" glow>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-glow shadow-[0_0_30px_rgba(124,92,255,0.2)]">
              <Image className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
              Coming <span className="text-accent-glow">Soon...</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              Symposium Gallery  will be uploaded soon..            </p>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
};
