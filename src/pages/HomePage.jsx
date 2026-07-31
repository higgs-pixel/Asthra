import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AccreditationsSection } from '../components/sections/AccreditationsSection';
import { StatsSection } from '../components/sections/StatsSection';
import { OrganisedBySection } from '../components/sections/OrganisedBySection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AccreditationsSection />
      <StatsSection />
      <OrganisedBySection />
    </div>
  );
};
