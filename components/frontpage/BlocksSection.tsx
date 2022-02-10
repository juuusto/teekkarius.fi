import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import T150_square_big from '../../public/images/Teekkarius150_nelio.jpg';
import T150_block_1 from '../../public/images/Vihreä.jpg';
import T150_block_2 from '../../public/images/Vaaleasininen.jpg';

const BlocksSection = () => {
  return (
    <StyledBlocksSection>
      <Container>
        <BlockBig>
          <Image src={T150_square_big} alt="Teekkarius 150" />
          <BlockText>Teekkarius 150</BlockText>
        </BlockBig>
        <BlocksContainer>
          <BlockItem>
            <BlockText>Lorem, ipsum.</BlockText>
          </BlockItem>
          <BlockItem>
            <Image src={T150_block_1} alt="Teekkarius 150" />
            <BlockText>Lorem, ipsum.</BlockText>
          </BlockItem>
          <BlockItem>
            <Image src={T150_block_2} alt="Teekkarius 150" />
            <BlockText>Lorem, ipsum.</BlockText>
          </BlockItem>
          <BlockItem>
            <BlockText>Lorem, ipsum.</BlockText>
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
  max-width: 1024px;
  width: 100%;
  padding: 3rem 1.5rem;
  padding-bottom: 0;
  color: ${({ theme }) => theme.colors.betoni};
`;

const BlockBig = styled.div`
  flex: 1;
  width: 0;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const BlockText = styled.p`
  position: absolute;
  text-transform: uppercase;
  font-size: 2.5em;
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
  font-size: 0.5em;

  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  cursor: pointer;

  transition: opacity 0.15s ease;

  &:first-child {
    background: ${({ theme }) => theme.colors.pimiä};
  }
  &:last-child {
    background: ${({ theme }) => theme.colors.portviini};
  }

  &:hover {
    opacity: 0.8;
    z-index: 3;
  }
`;

export default BlocksSection;
