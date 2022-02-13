import React from 'react';
import BlocksSection from './BlocksSection';
import HeroSection from './HeroSection';
import PartnersSection from './PartnersSection';
import SocialMediaSection from './SocialMediaSection';

// Tähän pystyy lisäilee yhteistyökumppaneita
// Logot /public/partner_logos/*
const partners = [
  {
    name: 'TTER',
    logoPath: '/partner_logos/tter_logo.svg',
  },
  {
    name: 'firma 2',
    logoPath: '/partner_logos/puuttuu.svg',
  },
];

const Frontpage = () => {
  return (
    <>
      <HeroSection />
      <BlocksSection />
      <SocialMediaSection />
      <PartnersSection partners={partners} />
    </>
  );
};

export default Frontpage;
