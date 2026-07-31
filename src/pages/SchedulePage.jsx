import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, CalendarCheck, AlertCircle, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GradientButton } from '../components/ui/GradientButton';
import { SCHEDULE_DAYS, SYMPOSIUM_INFO } from '../data/symposiumData';

export const SchedulePage = () => {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Heading */}
        <SectionHeading
          eyebrow="EVENT ITINERARY & DEADLINES"
          title="Symposium Schedule &"
          highlight="Timelines"
          subtitle="Explore the complete timeline for Day 1 events and Day 2 workshop sessions."
        />

        {/* Key Deadlines Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-accent-glow shrink-0" />
            <div>
              <p className="text-[10px] text-text-muted font-mono uppercase">Paper Submission</p>
              <p className="text-sm font-bold text-text-primary">{SYMPOSIUM_INFO.paperSubmissionDeadline}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-accent-secondary shrink-0" />
            <div>
              <p className="text-[10px] text-text-muted font-mono uppercase">Selection Intimation</p>
              <p className="text-sm font-bold text-text-primary">{SYMPOSIUM_INFO.selectionIntimation}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-[10px] text-text-muted font-mono uppercase">Registration Deadline</p>
              <p className="text-sm font-bold text-text-primary">{SYMPOSIUM_INFO.registrationDeadline}</p>
            </div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {SCHEDULE_DAYS.map((dayObj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayIdx(idx)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeDayIdx === idx
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {dayObj.day}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Sessions */}
        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-6">
          {SCHEDULE_DAYS[activeDayIdx].events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[39px] top-5 w-4 h-4 rounded-full bg-bg border-2 border-accent-primary group-hover:bg-accent-primary transition-all shadow-md shadow-accent-primary/40" />

              <GlassCard className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-glow mb-1">
                    <Clock className="w-3.5 h-3.5" /> {evt.time}
                  </span>
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent-glow transition-colors">
                    {evt.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted mt-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-secondary" /> {evt.venue}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Register Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-text-primary">{SCHEDULE_DAYS[activeDayIdx].title}</h4>
            <p className="text-xs text-text-muted">{SCHEDULE_DAYS[activeDayIdx].fee}</p>
          </div>
          <a
            href={SCHEDULE_DAYS[activeDayIdx].formUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton size="sm" icon={ExternalLink}>
              Register for {SCHEDULE_DAYS[activeDayIdx].day.split(' ')[0]}
            </GradientButton>
          </a>
        </div>

      </div>
    </div>
  );
};
