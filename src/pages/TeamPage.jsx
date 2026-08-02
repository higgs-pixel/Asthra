import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, User, Award, Star, Crown, ChevronDown } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/symposiumData';

const roleColors = {
  President: { bg: 'from-yellow-500/20 to-amber-500/10', border: 'border-yellow-500/40', text: 'text-yellow-300', dot: 'bg-yellow-400' },
  'Vice President': { bg: 'from-purple-500/20 to-violet-500/10', border: 'border-purple-400/40', text: 'text-purple-300', dot: 'bg-purple-400' },
  Secretary: { bg: 'from-blue-500/20 to-cyan-500/10', border: 'border-blue-400/40', text: 'text-blue-300', dot: 'bg-blue-400' },
  'Joint Secretary': { bg: 'from-sky-500/20 to-teal-500/10', border: 'border-sky-400/40', text: 'text-sky-300', dot: 'bg-sky-400' },
  Treasurer: { bg: 'from-green-500/20 to-emerald-500/10', border: 'border-green-400/40', text: 'text-green-300', dot: 'bg-green-400' },
  'Joint Treasurer': { bg: 'from-teal-500/20 to-cyan-500/10', border: 'border-teal-400/40', text: 'text-teal-300', dot: 'bg-teal-400' },
};

const CoreCard = ({ member, index, size = 'normal' }) => {
  const colors = roleColors[member.role] || roleColors['President'];
  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`relative group flex flex-col items-center text-center rounded-2xl p-3 border bg-gradient-to-b ${colors.bg} ${colors.border} backdrop-blur-xl hover:scale-105 transition-all duration-300
        ${isLarge ? 'w-[160px]' : 'w-[140px]'}
      `}
    >
      {/* Avatar */}
      <div className={`rounded-full flex items-center justify-center mb-2 border ${colors.border} bg-white/5
        ${isLarge ? 'w-10 h-10' : 'w-8 h-8'}
      `}>
        <User className={`${isLarge ? 'w-5 h-5' : 'w-4 h-4'} ${colors.text}`} />
      </div>

      {/* Name */}
      <h3 className={`font-bold text-white leading-tight mb-1.5 ${isLarge ? 'text-xs' : 'text-xs'}`}>
        {member.name}
      </h3>

      {/* Role badge */}
      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${colors.text} bg-white/5 border ${colors.border}`}>
        {member.role}
      </span>
    </motion.div>
  );
};

const SectionHeader = ({ icon, title, subtitle, color = 'cyan' }) => {
  const colorMap = {
    yellow: 'from-yellow-400 to-amber-400',
    cyan: 'from-accent-primary to-accent-cyan',
    purple: 'from-purple-400 to-violet-400',
  };

  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-xl">
        {icon}
      </div>
      <h2 className={`text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${colorMap[color] || colorMap.cyan} mb-2`}>
        {title}
      </h2>
      {subtitle && <p className="text-text-muted text-sm font-medium">{subtitle}</p>}
    </div>
  );
};

const MemberPill = ({ name, index, accentColor = 'cyan' }) => {
  const isCyan = accentColor === 'cyan';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-200 cursor-default group
        ${isCyan
          ? 'bg-accent-cyan/5 border-accent-cyan/15 hover:bg-accent-cyan/10 hover:border-accent-cyan/40'
          : 'bg-purple-400/5 border-purple-400/15 hover:bg-purple-400/10 hover:border-purple-400/40'
        }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125
        ${isCyan ? 'bg-accent-cyan/60' : 'bg-purple-400/60'}`}
      />
      <span className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
};

// Splits members into rows with decreasing count (inverted pyramid)
const InvertedPyramid = ({ members, accentColor = 'cyan' }) => {
  // Figure out row sizes: start with the widest row, decrease by 1 each time
  const rows = [];
  let remaining = [...members];
  // Max items per first row, then decrease
  const maxPerRow = Math.min(6, Math.ceil(members.length / 3));
  let rowSize = maxPerRow;
  while (remaining.length > 0) {
    const count = Math.min(rowSize, remaining.length);
    rows.push(remaining.splice(0, count));
    rowSize = Math.max(1, rowSize - 1);
  }

  let globalIndex = 0;
  return (
    <div className="flex flex-col items-center gap-3">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex flex-wrap justify-center gap-2.5">
          {row.map((name) => {
            const idx = globalIndex++;
            return <MemberPill key={idx} name={name} index={idx} accentColor={accentColor} />;
          })}
        </div>
      ))}
    </div>
  );
};

export const TeamPage = () => {
  const presidents = TEAM_MEMBERS.core.filter(m => m.role === 'President');
  const vicePresident = TEAM_MEMBERS.core.filter(m => m.role === 'Vice President');
  const secretaries = TEAM_MEMBERS.core.filter(m => m.role.includes('Secretary'));
  const treasurers = TEAM_MEMBERS.core.filter(m => m.role.includes('Treasurer'));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-60 left-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs font-black text-text-muted tracking-widest uppercase">
              ASTHRA Association · KSR College of Engineering
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-[1.05]">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-accent-primary to-accent-cyan">Team</span>
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg font-medium">
            The nominated members of the ASTHRA Association driving SPRING FEST 2K26.
          </p>
        </motion.div>

        {/* ── SECTION 1: Core Committee ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-24"
        >
          <div className="relative rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-2xl overflow-hidden p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            {/* Top shimmer line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            <SectionHeader
              icon={<Crown className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />}
              title="Core Committee"
              subtitle="Nominated leaders of the ASTHRA Association"
              color="yellow"
            />

            {/* Org-chart style layout */}
            <div className="flex flex-col items-center gap-4">

              {/* Row 1: Presidents */}
              <div className="flex flex-col items-center w-full">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-yellow-400/60 mb-3">Presidents</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {presidents.map((m, i) => <CoreCard key={i} member={m} index={i} size="large" />)}
                </div>
              </div>

              {/* Connector line */}
              <div className="w-px h-5 bg-gradient-to-b from-yellow-400/40 to-purple-400/40" />

              {/* Row 2: VP */}
              <div className="flex flex-col items-center w-full">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-purple-400/60 mb-3">Vice President</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {vicePresident.map((m, i) => <CoreCard key={i} member={m} index={i} />)}
                </div>
              </div>

              {/* Connector line */}
              <div className="w-px h-5 bg-gradient-to-b from-purple-400/40 to-blue-400/40" />

              {/* Row 3: Secretaries + Treasurers side by side */}
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400/60 mb-3">Secretaries</span>
                  <div className="flex flex-wrap justify-center gap-3">
                    {secretaries.map((m, i) => <CoreCard key={i} member={m} index={i} />)}
                  </div>
                </div>
                <div className="hidden md:block w-px bg-white/5" />
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-green-400/60 mb-3">Treasurers</span>
                  <div className="flex flex-wrap justify-center gap-3">
                    {treasurers.map((m, i) => <CoreCard key={i} member={m} index={i} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom shimmer line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
          </div>
        </motion.section>

        {/* ── SECTION 2: Executive Members ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <SectionHeader
            icon={<Award className="w-7 h-7 text-accent-primary" />}
            title="Executive Association Members"
            subtitle={`${TEAM_MEMBERS.executiveMembers.length} members`}
            color="cyan"
          />
          <InvertedPyramid members={TEAM_MEMBERS.executiveMembers} accentColor="cyan" />
        </motion.section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <ChevronDown className="w-5 h-5 text-white/20" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* ── SECTION 3: Office Bearers ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SectionHeader
            icon={<Users className="w-7 h-7 text-purple-400" />}
            title="Office Bearers"
            subtitle={`${TEAM_MEMBERS.officeBearers.length} members`}
            color="purple"
          />
          <InvertedPyramid members={TEAM_MEMBERS.officeBearers} accentColor="purple" />
        </motion.section>

      </div>
    </div>
  );
};
