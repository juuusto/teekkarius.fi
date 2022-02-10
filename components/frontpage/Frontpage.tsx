import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import logo from '../../public/images/T150.png';
import { FaInstagram, FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import { url } from 'inspector';

const Frontpage = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroLogoWrapper>
            <Image src={logo} alt="" draggable={false} />
          </HeroLogoWrapper>
          <H2>Lorem ipsum dolor, sit amet consectetur adipisicing.</H2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dignissimos porro, aliquid aperiam nemo nam quasi asperiores
            repellendus rerum, quo voluptatem.
          </p>
          <Button>Lorem ipsumatusm</Button>
        </Container>
      </Hero>
      <SocialMediaSection>
        <SocialMediaContainer>
          <SocialMediaIcon
            href={'https://instagram.com/teekkarius150'}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={'https://facebook.com/teekkarius150'}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={'https://t.me/teekkarius150'}
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </SocialMediaSection>
    </>
  );
};

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.polysteekki};
  width: 100%;
  height: 100vh;
  padding-top: 10em;
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
  text-align: center;
  max-width: 1024px;
  padding: 0 1.5em;
`;

const HeroLogoWrapper = styled.div`
  max-width: 80%;
  margin-bottom: 4em;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const H2 = styled.h2`
  margin-bottom: 1em;
`;

const Button = styled.button`
  margin-top: 3em;
  padding: 1em 2em;
  border-radius: 2em;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.polysteekki};
  color: ${({ theme }) => theme.colors.tupsu};

  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.portviini};
  width: 100%;
  background: ${({ theme }) => theme.colors.betoni};
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  max-width: 1024px;
  width: 100%;
  padding: 6em 1.5rem;
`;

const SocialMediaIcon = styled.a`
  font-size: 4em;
  color: inherit;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 800px) {
    font-size: 6em;
  }
`;

export default Frontpage;
