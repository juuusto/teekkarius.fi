import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/T150.svg';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation('home');
  return (
    <Hero>
      <Container>
        <HeroLogoWrapper>
          <Image src={logo} alt="" draggable={false} priority layout="fill" />
        </HeroLogoWrapper>
        <Slogan>{t('hero')} </Slogan>
        {/* <Link href="/events" passHref>
          <Button>{t('nav:events')}</Button>
        </Link> */}
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: ${({ theme }) => theme.colors.pimiä};
  background-image: url('/images/hero.jpg');
  background-size: cover;

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
  width: 100%;
  padding: 0 1.5em;
  height: 100vh;
`;

const HeroLogoWrapper = styled.div`
  width: 80%;
  height: 60%;
  margin-bottom: 2em;
  position: relative;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 30%;
  }
`;

const Slogan = styled.p`
  font-size: 2rem;
  font-family: 'KionaBold';
  max-width: 40ch;
`;

export default HeroSection;
