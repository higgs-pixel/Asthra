import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { WorkshopPage } from './pages/WorkshopPage';
import { SchedulePage } from './pages/SchedulePage';
import { GalleryPage } from './pages/GalleryPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { WhatsAppCommunityModal } from './components/WhatsAppCommunityModal';
import { InvitationCardModal } from './components/InvitationCardModal';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/"         element={<HomePage />} />
          <Route path="/events"   element={<EventsPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/gallery"  element={<GalleryPage />} />
          <Route path="/team"     element={<TeamPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <div className="min-h-screen text-text-primary selection:bg-accent-primary/30 selection:text-accent-glow flex flex-col font-sans relative overflow-x-hidden">
        <ParticleBackground />
        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
        <WhatsAppCommunityModal />
        <InvitationCardModal />
      </div>
    </BrowserRouter>
  );
}
