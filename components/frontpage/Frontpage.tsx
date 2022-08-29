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
    logoPath: '/partner_logos/espoo_logo.svg',
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
    name: 'Ramboll',
    logoPath: '/partner_logos/ramboll_logo.png',
    main: false,
  },
  {
    name: 'aTalent',
    logoPath: '/partner_logos/aTalent_logo.svg',
    main: false,
  },
  {
    name: 'FCG',
    logoPath: '/partner_logos/FCG_logo.png',
    main: false,
  },
  {
    name: 'Sievo',
    logoPath: '/partner_logos/sievo_logo.png',
    main: false,
  },
  {
    name: 'Siili',
    logoPath: '/partner_logos/siili_logo.png',
    main: false,
  },
  {
    name: 'Deloitte',
    logoPath: '/partner_logos/deloitte_logo.png',
    main: false,
  },
  {
    name: 'RIL',
    logoPath: '/partner_logos/ril_logo.png',
    main: false,
  },
  {
    name: 'Promler',
    logoPath: '/partner_logos/promler_logo.png',
    main: false,
  },
  {
    name: 'TeekkariSpeksi',
    logoPath: '/partner_logos/teekkari_speksi_logo.png',
    main: false,
  },
  {
    name: 'VTT',
    logoPath: '/partner_logos/VTT_logo.png',
    main: false,
  },
];

type Props = {
  feed: InstagramPost[] | null;
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
