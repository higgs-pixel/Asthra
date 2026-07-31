import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, MapPin, Phone, Award } from 'lucide-react';
import { SYMPOSIUM_INFO, COMMITTEE } from '../../data/symposiumData';

export const Footer = () => {
  return (
    <footer className="bg-bg-surface border-t border-white/[0.08] text-text-secondary pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-secondary p-0.5">
                <div className="w-full h-full bg-bg-surface rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-accent-glow" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-text-primary">
                {SYMPOSIUM_INFO.name}
              </span>
            </div>

            <p className="text-xs text-text-secondary max-w-sm leading-relaxed">
              {SYMPOSIUM_INFO.institution} — {SYMPOSIUM_INFO.department} ({SYMPOSIUM_INFO.association}). NAAC Accredited A++ | NBA Accredited.
            </p>

            <div className="flex flex-col gap-2 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-primary shrink-0" /> {SYMPOSIUM_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent-secondary shrink-0" /> {SYMPOSIUM_INFO.contactEmail}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Faculty Coordinator: {COMMITTEE.facultyCoordinator.phone}
              </span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Navigation Pages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-accent-glow transition-colors">Home Page</Link></li>
              <li><Link to="/events" className="hover:text-accent-glow transition-colors">Events & Paper</Link></li>
              <li><Link to="/workshop" className="hover:text-accent-glow transition-colors">Agentic AI Workshop</Link></li>
              <li><Link to="/schedule" className="hover:text-accent-glow transition-colors">Schedule & Timelines</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-glow transition-colors">Campus Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-accent-glow transition-colors">Contact Coordinators</Link></li>
            </ul>
          </div>

          {/* Col 4: Deadlines & Forms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Registration Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={SYMPOSIUM_INFO.eventFormUrl} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors flex items-center gap-1">
                  Day 1 Registration Form ↗
                </a>
              </li>
              <li>
                <a href={SYMPOSIUM_INFO.workshopFormUrl} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors flex items-center gap-1">
                  Day 2 Workshop Form ↗
                </a>
              </li>
              <li><span className="text-text-muted">Paper Submission: {SYMPOSIUM_INFO.paperSubmissionDeadline}</span></li>
              <li><span className="text-text-muted">Selection Intimation: {SYMPOSIUM_INFO.selectionIntimation}</span></li>
            </ul>
          </div>

          {/* Col 5: Patronage */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Academic Excellence
            </h4>
            <p className="text-xs text-text-muted leading-relaxed mb-3">
              {SYMPOSIUM_INFO.celebration}. Approved by AICTE, affiliated to Anna University.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-accent-glow font-mono font-bold">
              KSRCE ASTHRA 2K26
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>© 2026 {SYMPOSIUM_INFO.institution} — Department of IT. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with LanX SaaS Design & React Router
          </p>
        </div>
      </div>
    </footer>
  );
};
