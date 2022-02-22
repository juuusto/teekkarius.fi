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
    logoPath: '/partner_logos/TTER_logo_white.png',
  },
  {
    name: 'Espoo',
    logoPath: '/partner_logos/espoo_logo.png',
  },
  {
    name: 'ABB',
    logoPath: '/partner_logos/ABB_logo.svg',
  },
  {
    name: 'Ramboll',
    logoPath: '/partner_logos/ramboll_logo.png',
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
