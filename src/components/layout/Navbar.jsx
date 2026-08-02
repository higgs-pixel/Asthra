import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { GradientButton } from '../ui/GradientButton';
import { SYMPOSIUM_INFO } from '../../data/symposiumData';

export const Navbar = () => {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 20;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-text-primary group-hover:text-accent-glow transition-colors">
              {SYMPOSIUM_INFO.name}
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-accent-primary/20 text-accent-glow border border-accent-primary/30">
              2K26
            </span>
          </div>
          <p className="text-[10px] text-text-muted hidden sm:block tracking-tight font-medium">
            {SYMPOSIUM_INFO.department}
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-text-primary hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-surface/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-accent-primary/20 text-accent-glow border border-accent-primary/30'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
