import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/T150.svg';
import styled from 'styled-components';

const HeroSection = () => {
  return (
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
  text-align: center;
  max-width: 1024px;
  padding: 0 1.5em;
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
  border: none;

  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.05s ease;
  }
`;

export default HeroSection;
