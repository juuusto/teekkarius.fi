import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import T150_square_big from '../../public/images/block_main.jpg';
import T150_block_1 from '../../public/images/Vihreä.jpg';
import T150_block_2 from '../../public/images/Vaaleanvihreä.jpg';
import useTranslation from 'next-translate/useTranslation';

const BlocksSection = () => {
  const { t } = useTranslation('home');
  return (
    <StyledBlocksSection>
      <Container>
        <BlockBig>
          <Image src={T150_square_big} alt="Teekkarius 150" />
          <BlockText>Teekkarius 150</BlockText>
        </BlockBig>
        <BlocksContainer>
          <BlockItem href="/events">
            <BlockText>{t('nav:events')}</BlockText>
          </BlockItem>
          <BlockItem href="/activities">
            <Image src={T150_block_1} alt="Teekkarius 150" />
            <BlockText>{t('nav:activities')}</BlockText>
          </BlockItem>
          <BlockItem href="/activities">
            <Image src={T150_block_2} alt="Teekkarius 150" />
            <BlockText>{t('point_card')}</BlockText>
          </BlockItem>
          <BlockItem href="/contact">
            <BlockText>{t('nav:contact')}</BlockText>
          </BlockItem>
        </BlocksContainer>
      </Container>
    </StyledBlocksSection>
  );
};

const StyledBlocksSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.betoni};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1600px;
  width: 100%;
  padding: 6rem;
  padding-bottom: 0;
  color: ${({ theme }) => theme.colors.betoni};

  @media screen and (max-width: 800px) {
    padding: 1.5rem;
    padding-bottom: 0;
  }
`;

const BlockBig = styled.div`
  flex: 1;
  width: 0;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  pointer-events: none;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const BlockText = styled.p`
  position: absolute;
  text-transform: uppercase;
  /* font-size: 2.5em; */
  max-width: 100%;
`;

const BlocksContainer = styled.div`
  flex: 1;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const BlockItem = styled.a`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;

  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  cursor: pointer;

  transition: opacity 0.15s ease;

  color: black;
  font-weight: bold;

  &:first-child,
  &:last-child {
    background: ${({ theme }) => theme.colors.portviini};
    color: ${({ theme }) => theme.colors.betoni};
  }

  &:hover {
    opacity: 0.8;
    z-index: 3;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export default BlocksSection;
