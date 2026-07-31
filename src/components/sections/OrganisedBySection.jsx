import React from 'react';
import { motion } from 'framer-motion';
import { Phone, UserCheck, Award, Mail, Building, Users } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { COMMITTEE, SYMPOSIUM_INFO } from '../../data/symposiumData';

export const OrganisedBySection = () => {
  return (
    <section id="organised-by" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="SYMPOSIUM LEADERSHIP"
          title="Organised By"
          highlight="ASTHRA & Department of IT"
          subtitle="Under the visionary patronage and academic leadership of KSR College of Engineering."
        />

        {/* Patrons & Convenors Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Chief Patron */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full flex flex-col justify-between group" glow>
              <div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded bg-accent-primary/20 text-accent-glow border border-accent-primary/30 mb-4 inline-block">
                  CHIEF PATRON
                </span>
                <h3 className="text-lg font-extrabold text-text-primary group-hover:text-accent-glow transition-colors">
                  {COMMITTEE.chiefPatron.name}
                </h3>
                <p className="text-xs font-semibold text-accent-secondary mt-1">
                  {COMMITTEE.chiefPatron.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {COMMITTEE.chiefPatron.affiliation}
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Patron */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between group">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30 mb-4 inline-block">
                  PATRON
                </span>
                <h3 className="text-lg font-extrabold text-text-primary group-hover:text-accent-glow transition-colors">
                  {COMMITTEE.patron.name}
                </h3>
                <p className="text-xs font-semibold text-accent-secondary mt-1">
                  {COMMITTEE.patron.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {COMMITTEE.patron.affiliation}
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Convenor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="h-full flex flex-col justify-between group">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4 inline-block">
                  CONVENOR
                </span>
                <h3 className="text-lg font-extrabold text-text-primary group-hover:text-accent-glow transition-colors">
                  {COMMITTEE.convenor.name}
                </h3>
                <p className="text-xs font-semibold text-accent-secondary mt-1">
                  {COMMITTEE.convenor.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {COMMITTEE.convenor.affiliation}
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Co-Convenor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full flex flex-col justify-between group">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4 inline-block">
                  CO-CONVENOR
                </span>
                <h3 className="text-lg font-extrabold text-text-primary group-hover:text-accent-glow transition-colors">
                  {COMMITTEE.coConvenor.name}
                </h3>
                <p className="text-xs font-semibold text-accent-secondary mt-1">
                  {COMMITTEE.coConvenor.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {COMMITTEE.coConvenor.affiliation}
                </p>
              </div>
            </GlassCard>
          </motion.div>

        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Faculty Coordinator Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <GlassCard className="w-full flex flex-col justify-between p-8 border-accent-primary/40 bg-accent-primary/[0.04]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="w-5 h-5 text-accent-glow" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-accent-glow">
                    FACULTY CO-ORDINATOR
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-text-primary">
                  {COMMITTEE.facultyCoordinator.name}
                </h3>
                <p className="text-sm font-semibold text-accent-secondary mt-1">
                  {COMMITTEE.facultyCoordinator.title} · Department of IT
                </p>
                <p className="text-xs text-text-muted mt-3 leading-relaxed">
                  For official academic queries, paper submission guidelines, and event co-ordination.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`tel:${COMMITTEE.facultyCoordinator.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-primary text-white font-bold text-xs hover:brightness-110 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: {COMMITTEE.facultyCoordinator.phone}
                </a>

                <a
                  href={`mailto:${SYMPOSIUM_INFO.contactEmail}`}
                  className="text-xs text-text-muted hover:text-text-primary underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Us
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Student Coordinators Card Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-accent-secondary" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary">
                  STUDENT CO-ORDINATORS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMMITTEE.studentCoordinators.map((sc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-primary/30 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-extrabold text-text-primary group-hover:text-accent-glow transition-colors">
                        {sc.name}
                      </h4>
                      <p className="text-[11px] text-text-muted">{sc.role}</p>
                    </div>

                    <a
                      href={`tel:${sc.phone}`}
                      className="p-2 rounded-lg bg-white/[0.05] text-accent-glow hover:bg-accent-primary hover:text-white transition-colors"
                      title={`Call ${sc.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
