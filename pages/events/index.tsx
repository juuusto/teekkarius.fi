import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../../components/layout/Layout';
import bigCog from '../../public/images/big_cog.svg';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const EventsPage = () => {
  const { t } = useTranslation('events');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="pimiäLight" imageUrl="" setImage={false}>
        <EventsSection>
          <CogContainer>
            <Link href="/events/main" passHref>
              <Cog className="left">
                <Image src={bigCog} alt="cog" layout="fill" priority />
                <CogText>{t('yearClock')}</CogText>
              </Cog>
            </Link>
            <Link href="/events/community" passHref>
              <Cog className="right">
                <Image src={bigCog} alt="cog" layout="fill" priority />
                <CogText>{t('community')}</CogText>
              </Cog>
            </Link>
          </CogContainer>
        </EventsSection>
      </Layout>
    </>
  );
};

const rotateCog = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const rotateCog2 = keyframes`
  from {
    transform: rotate(-10deg);
  }

  to {
    transform: rotate(350deg);
  }
`;

const EventsSection = styled.section`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.pimiäLight};
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const CogContainer = styled.div`
  width: 100%;
  margin-left: 15vh;
  margin-right: 15vh;
  margin-top: 20vh;
  aspect-ratio: 3 / 2;
  max-width: 1000px;
  position: relative;
  @media screen and (max-width: 1000px) {
    aspect-ratio: auto;
    height: 60vh;
    margin-left: 8vh;
    margin-right: 8vh;
  }
`;

const Cog = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: max(65%, 320px);
  aspect-ratio: 1 / 1;

  color: #fff;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &.left {
    top: -10%;
    left: -20%;
  }
  &.left > * > img {
    animation: ${rotateCog2} 20s infinite linear;
  }

  &.right {
    right: -20%;
    bottom: -20%;
  }
  &.right > * > img {
    animation: ${rotateCog} 20s infinite linear reverse;
  }
`;

const CogText = styled.p`
  z-index: 1;
  text-transform: uppercase;
  font-size: calc(min(5vw, 2.5rem));
`;

export default EventsPage;
