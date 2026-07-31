import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Cpu, FileText, Calendar, IndianRupee } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GradientButton } from '../components/ui/GradientButton';
import { Badge } from '../components/ui/Badge';
import { SYMPOSIUM_INFO, WORKSHOP_DETAILS, PAPER_PRESENTATION_DETAILS } from '../data/symposiumData';

export const RegisterEventsPage = () => {
  return (
    <div className="pt-28 pb-24 bg-bg min-h-screen relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        <SectionHeading
          eyebrow="SPRING FEST 2K26 · REGISTRATION"
          title="Register for"
          highlight="Events & Workshops"
          subtitle={`Complete your registration via our official Google Forms. Deadline: ${SYMPOSIUM_INFO.registrationDeadline}.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">

          {/* Day 1 — Events & Paper Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-8 flex flex-col h-full border-accent-primary/40 shadow-glass-glow bg-white/[0.03]" glow>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-accent-primary/20 text-accent-glow">
                  <Sparkles className="w-6 h-6" />
                </div>
                <Badge variant="purple">DAY 1 · 21.08.2026</Badge>
              </div>

              <h3 className="text-2xl font-extrabold text-text-primary mb-2">
                Technical &amp; Non-Technical Events
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                Register for any of our Day 1 competitions including AI Prompt Sprint, Bug Blitz,
                Code Insight, Idea Pitch, Chess Arena, Meme Sprint, Snap Rush, and Guess The Beat.
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-xs text-text-muted p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <IndianRupee className="w-4 h-4 text-accent-primary shrink-0" />
                  <span><strong className="text-text-primary">Fee:</strong> Rs. 100 per event</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Calendar className="w-4 h-4 text-accent-secondary shrink-0" />
                  <span><strong className="text-text-primary">Deadline:</strong> {SYMPOSIUM_INFO.registrationDeadline}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-text-primary">Paper Submission:</strong> {SYMPOSIUM_INFO.paperSubmissionDeadline}</span>
                </div>
              </div>

              <a
                href={SYMPOSIUM_INFO.eventFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <GradientButton size="lg" icon={ExternalLink} className="w-full justify-center">
                  Register Day 1 Events (Google Form)
                </GradientButton>
              </a>
            </GlassCard>
          </motion.div>

          {/* Day 2 — Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-8 flex flex-col h-full border-emerald-400/40 bg-white/[0.03]">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <Badge variant="green">DAY 2 · 22.08.2026</Badge>
              </div>

              <h3 className="text-2xl font-extrabold text-text-primary mb-2">
                Agentic AI &amp; Cloud Workshop
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                {WORKSHOP_DETAILS.overview}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-xs text-text-muted p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <IndianRupee className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-text-primary">Fee:</strong> Rs. {WORKSHOP_DETAILS.fee} per person</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-text-primary">Date &amp; Time:</strong> {WORKSHOP_DETAILS.date}, {WORKSHOP_DETAILS.time}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-semibold text-center">
                  🎓 Certificate included
                </div>
              </div>

              <a
                href={SYMPOSIUM_INFO.workshopFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <GradientButton size="lg" icon={ExternalLink} className="w-full justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400">
                  Register Day 2 Workshop (Google Form)
                </GradientButton>
              </a>
            </GlassCard>
          </motion.div>

        </div>

        {/* Paper Presentation card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <GlassCard className="p-6 sm:p-8 border-purple-500/30 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="purple" className="mb-2">DAY 1 · PAPER PRESENTATION · Rs. {PAPER_PRESENTATION_DETAILS.fee}</Badge>
                <h3 className="text-lg font-extrabold text-text-primary">{PAPER_PRESENTATION_DETAILS.title}</h3>
                <p className="text-xs text-text-secondary mt-1">
                  Theme: {PAPER_PRESENTATION_DETAILS.theme} &nbsp;|&nbsp;
                  Last date for paper submission: <strong className="text-text-primary">{PAPER_PRESENTATION_DETAILS.lastDateSubmission}</strong>
                </p>
              </div>
            </div>
            <a
              href={PAPER_PRESENTATION_DETAILS.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full md:w-auto"
            >
              <GradientButton size="sm" icon={ExternalLink} className="w-full md:w-auto justify-center">
                Submit Paper (Google Form)
              </GradientButton>
            </a>
          </GlassCard>
        </motion.div>

        {/* Info note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-text-muted mt-8"
        >
          For queries, contact us at{' '}
          <a href={`mailto:${SYMPOSIUM_INFO.contactEmail}`} className="text-accent-glow underline font-mono">
            {SYMPOSIUM_INFO.contactEmail}
          </a>
          {' '}or reach out to the student coordinators on the{' '}
          <a href="/contact" className="text-accent-glow underline">Contact page</a>.
        </motion.p>

      </div>
    </div>
  );
};
