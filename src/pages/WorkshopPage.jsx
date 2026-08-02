import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, Award, Calendar, MapPin, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GradientButton } from '../components/ui/GradientButton';
import { Badge } from '../components/ui/Badge';
import { WORKSHOP_DETAILS } from '../data/symposiumData';

export const WorkshopPage = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
      {/* Radiant Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-accent-primary/20 via-accent-secondary/20 to-accent-glow/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="DAY 2 · 22.08.2026 MASTERCLASS WORKSHOP"
          title="Hands-on Workshop on"
          highlight="Agentic AI & Cloud"
          subtitle="Empower your engineering career with cutting-edge autonomous AI agent orchestration and cloud-native architecture."
        />

        <GlassCard className="p-8 md:p-12 border-accent-secondary/50 shadow-glass-glow bg-white/[0.04]" glow>
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="blue">{WORKSHOP_DETAILS.date}</Badge>
                <Badge variant="purple">{WORKSHOP_DETAILS.theme}</Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                {WORKSHOP_DETAILS.title}
              </h2>
            </div>

            <div className="text-left md:text-right shrink-0 bg-white/[0.03] p-4 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-text-primary">Rs. {WORKSHOP_DETAILS.fee}</span>
              <span className="text-xs text-text-muted block font-medium">/ Person</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mt-1">
                Certificate Included
              </span>
            </div>
          </div>

          {/* Overview text */}
          <div className="my-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent-glow mb-2">
              Workshop Overview & Abstract:
            </h3>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {WORKSHOP_DETAILS.overview}
            </p>
          </div>

          {/* Key Deliverables & Modules */}
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-4">
              What You Will Learn & Receive:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WORKSHOP_DETAILS.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-primary/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-glow shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistical Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-10 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent-primary" />
              <span><strong>Date & Time:</strong> {WORKSHOP_DETAILS.date} ({WORKSHOP_DETAILS.time})</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-secondary" />
              <span><strong>Venue:</strong> {WORKSHOP_DETAILS.venue}</span>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-text-muted">
              Certificates issued by ASTHRA Association & Department of IT.
            </span>
          </div>

        </GlassCard>

      </div>
    </div>
  );
};
