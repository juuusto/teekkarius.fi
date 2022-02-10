import React from 'react';
import styled from 'styled-components';
import BlocksSection from './BlocksSection';
import HeroSection from './HeroSection';
import PartnersSection from './PartnersSection';
import SocialMediaSection from './SocialMediaSection';

const Frontpage = () => {
  return (
    <>
      <HeroSection />
      <BlocksSection />
      <SocialMediaSection />
      <PartnersSection />
    </>
  );
};

export default Frontpage;
