import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/T150.svg';
import styled from 'styled-components';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation('home');
  return (
    <Hero>
      <Container>
        <HeroLogoWrapper>
          <Image src={logo} alt="" draggable={false} priority />
        </HeroLogoWrapper>
        <H1>Lorem ipsum dolor, sit amet consectetur adipisicing.</H1>
        <Link href="/events" passHref>
          <Button>{t('nav:events')}</Button>
        </Link>
      </Container>
    </Hero>
  );
};

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.polysteekki};
  width: 100%;
  height: 100vh;
  padding-top: 7rem;
  padding-bottom: 2rem;
  background: ${({ theme }) => theme.colors.pimiä};

  p::selection,
  h2::selection {
    color: ${({ theme }) => theme.colors.tupsu};
    background: ${({ theme }) => theme.colors.polysteekki};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1024px;
  padding: 0 1.5em;
  height: 100vh;
`;

const HeroLogoWrapper = styled.div`
  max-width: 50%;
  margin-bottom: 2em;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 800px) {
    max-width: 70%;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
`;

const Button = styled.a`
  min-width: 200px;
  margin-top: 3em;
  padding: 1em 2em;
  border-radius: 2em;
  font-size: 1.25em;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.polysteekki};
  color: ${({ theme }) => theme.colors.tupsu};
  border: none;
  cursor: pointer;
  text-decoration: none;

  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.05s ease;
  }
`;

export default HeroSection;
