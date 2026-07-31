import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Navigation, UserCheck, Users, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GradientButton } from '../components/ui/GradientButton';
import { COMMITTEE, SYMPOSIUM_INFO } from '../data/symposiumData';

export const ContactPage = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Heading */}
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Contact & Support"
          highlight="Desk"
          subtitle="Reach out to our faculty and student coordinators for queries regarding registration, paper submission, or venue travel."
        />

        {/* Paper Submission Email Card */}
        <div className="mb-12">
          <GlassCard className="p-6 md:p-8 bg-accent-primary/[0.04] border-accent-primary/40 shadow-glass-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-4" glow>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-accent-primary/20 text-accent-glow">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent-glow">Paper Submission Email ID:</p>
                <a
                  href={`mailto:${SYMPOSIUM_INFO.contactEmail}`}
                  className="text-lg md:text-xl font-mono font-extrabold text-text-primary hover:underline hover:text-accent-glow transition-colors"
                >
                  {SYMPOSIUM_INFO.contactEmail}
                </a>
              </div>
            </div>

            <a href={`mailto:${SYMPOSIUM_INFO.contactEmail}`}>
              <GradientButton size="sm" icon={Mail}>
                Send Email
              </GradientButton>
            </a>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Faculty Coordinator */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 border-accent-secondary/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="w-5 h-5 text-accent-secondary" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary">
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
                  KSR College of Engineering, K.S.R. Kalvi Nagar, Tiruchengode - 637 215, Namakkal District, Tamil Nadu.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`tel:${COMMITTEE.facultyCoordinator.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:brightness-110 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" /> Call: {COMMITTEE.facultyCoordinator.phone}
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Student Coordinators Grid */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-accent-glow" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-accent-glow">
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
                      <p className="text-xs font-mono font-bold text-accent-secondary mt-1">{sc.phone}</p>
                    </div>

                    <a
                      href={`tel:${sc.phone}`}
                      className="p-2.5 rounded-xl bg-white/[0.05] text-accent-glow hover:bg-accent-primary hover:text-white transition-colors"
                      title={`Call ${sc.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

        {/* Map Location Card */}
        <GlassCard hoverEffect={false} className="p-8 border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-accent-glow font-bold uppercase tracking-widest">CAMPUS LOCATION</span>
              <h3 className="text-xl font-bold text-text-primary">KSR College of Engineering</h3>
              <p className="text-xs text-text-muted">K.S.R. Kalvi Nagar, Tiruchengode - 637 215, Namakkal Dt, Tamil Nadu</p>
            </div>
            <a
              href="https://maps.google.com/?q=KSR+College+of+Engineering"
              target="_blank"
              rel="noreferrer"
            >
              <GradientButton size="sm" icon={Navigation}>
                Get Directions
              </GradientButton>
            </a>
          </div>

          {/* Real Google Maps Embed */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: '420px' }}>
            <iframe
              title="KSR College of Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.832295737154!2d77.8636!3d11.3647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f39c2d1e9b5%3A0x6b5e2e1c0a3b4d5f!2sKSR%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay pin label */}
            <div className="absolute bottom-4 left-4 bg-[#08080B]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-accent-glow" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-text-primary">KSR College of Engineering</p>
                <p className="text-[10px] text-text-muted">Tiruchengode, Namakkal Dt, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </GlassCard>

      </div>
    </div>
  );
};
