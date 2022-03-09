import React, { useEffect } from 'react';
// @ts-ignore
import Instafeed from 'instafeed.js';
import styled from 'styled-components';

const feed = new Instafeed({
  accessToken: process.env.NEXT_PUBLIC_IG_KEY,
  template:
    '<a href="{{link}}" target="_blank" rel="noreferrer"><img title="{{caption}}" src="{{image}}" /></a>',
  limit: 9,
});

const InstagramSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      feed.run();
    }
  }, []);

  return (
    <Section>
      <H2>Instagram</H2>
      <Container id="instafeed"></Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.betoni};
`;

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1600px;
  gap: 1.5rem;
  padding: 6rem;
  padding-top: 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

export default InstagramSection;
