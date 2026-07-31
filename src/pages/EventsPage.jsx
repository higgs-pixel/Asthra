import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bug, Lightbulb, Code, Crown, Smile, Camera, Music, CheckCircle2, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GradientButton } from '../components/ui/GradientButton';
import { Badge } from '../components/ui/Badge';
import { TECHNICAL_EVENTS, NON_TECHNICAL_EVENTS, PAPER_PRESENTATION_DETAILS, SYMPOSIUM_INFO } from '../data/symposiumData';

export const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('technical'); // 'technical' | 'non-technical' | 'paper'

  const getEventIcon = (name) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-accent-primary" />;
      case 'Bug':
        return <Bug className="w-6 h-6 text-accent-secondary" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-pink-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-sky-400" />;
      case 'Music':
        return <Music className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent-primary" />;
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Heading */}
        <SectionHeading
          eyebrow="DAY 1 · 21.08.2026 COMPETITIONS"
          title="Symposium Events &"
          highlight="Paper Presentation"
          subtitle="Compete in national technical challenges, paper presentations, and high-energy non-technical events."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Technical Events (Rs. 100)
            </button>
            <button
              onClick={() => setActiveTab('non-technical')}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeTab === 'non-technical'
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Non-Technical Events (Rs. 100)
            </button>
            <button
              onClick={() => setActiveTab('paper')}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeTab === 'paper'
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Paper Presentation (Rs. 300)
            </button>
          </div>
        </div>

        {/* Technical Events Grid */}
        {activeTab === 'technical' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {TECHNICAL_EVENTS.map((event) => (
              <GlassCard key={event.id} className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {getEventIcon(event.icon)}
                    </div>
                    <Badge variant="purple">Rs. {event.price} / Per Event</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-glow transition-colors">
                    {event.name}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-glow mb-2">Rules & Guidelines:</p>
                    <ul className="space-y-1.5 text-xs text-text-muted">
                      {event.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-text-muted">{event.date}</span>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}

        {/* Non-Technical Events Grid */}
        {activeTab === 'non-technical' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {NON_TECHNICAL_EVENTS.map((event) => (
              <GlassCard key={event.id} className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {getEventIcon(event.icon)}
                    </div>
                    <Badge variant="blue">Rs. {event.price} / Per Event</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-glow transition-colors">
                    {event.name}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-2">Rules & Guidelines:</p>
                    <ul className="space-y-1.5 text-xs text-text-muted">
                      {event.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-text-muted">{event.date}</span>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}

        {/* Paper Presentation Section */}
        {activeTab === 'paper' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8 border-accent-primary/40 shadow-glass-glow" glow>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <Badge variant="purple" className="mb-2">DAY 1 MAIN EVENT</Badge>
                  <h3 className="text-2xl font-extrabold text-text-primary">
                    {PAPER_PRESENTATION_DETAILS.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-glow mt-1">
                    Theme: {PAPER_PRESENTATION_DETAILS.theme}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-text-primary">Rs. {PAPER_PRESENTATION_DETAILS.fee}</span>
                  <span className="text-xs text-text-muted block">/ Person</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-3">
                    Suggested Research Topics & Domains:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PAPER_PRESENTATION_DETAILS.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <CheckCircle2 className="w-4 h-4 text-accent-glow shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-xs text-text-secondary space-y-2">
                  <p><strong className="text-text-primary">Paper Submission Email:</strong> <a href={`mailto:${PAPER_PRESENTATION_DETAILS.submissionEmail}`} className="text-accent-glow underline font-mono">{PAPER_PRESENTATION_DETAILS.submissionEmail}</a></p>
                  <p><strong className="text-text-primary">Last Date for Paper Submission:</strong> {PAPER_PRESENTATION_DETAILS.lastDateSubmission}</p>
                  <p><strong className="text-text-primary">Selection Intimation Date:</strong> {PAPER_PRESENTATION_DETAILS.selectionIntimation}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <span className="text-xs text-text-muted">
                  Send soft copy PDF/Word manuscript to official email before deadline.
                </span>
              </div>
            </GlassCard>
          </motion.div>
        )}

      </div>
    </div>
  );
};
