import React from 'react';
import BlocksSection from './BlocksSection';
import HeroSection from './HeroSection';
import InstagramSection from './InstagramSection';
import PartnersSection from './PartnersSection';
import SocialMediaSection from './SocialMediaSection';

// Tähän pystyy lisäilee yhteistyökumppaneita
// Logot /public/partner_logos/*
const partners = [
  {
    name: 'TTER',
    logoPath: '/partner_logos/TTER_logo_white.png',
    main: true,
  },
  {
    name: 'Espoo',
    logoPath: '/partner_logos/espoo_logo.png',
    main: true,
  },
  {
    name: 'TEK',
    logoPath: '/partner_logos/TEK_logo.png',
    main: false,
  },
  {
    name: 'ABB',
    logoPath: '/partner_logos/ABB_logo.svg',
    main: false,
  },
  {
    name: 'Sievo',
    logoPath: '/partner_logos/sievo_logo.png',
    main: false,
  },
];

type Props = {
  feed: InstagramPost[];
};

const Frontpage = ({ feed }: Props) => {
  return (
    <>
      <HeroSection />
      <BlocksSection />
      <SocialMediaSection />
      <InstagramSection feed={feed} />
      <PartnersSection partners={partners} />
    </>
  );
};

export default Frontpage;
