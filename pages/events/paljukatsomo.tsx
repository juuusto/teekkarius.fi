import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';

import banner from '../../public/images/paljugraffa.svg';
import texture from '../../public/images/paperitekstuuri.jpg';
import map from '../../public/images/tekniikan_taikaa_kartta.png';

const MagicOfTechnologyPage = () => {
  const { t } = useTranslation('events');

  return (
    <>
      <Head>
        <title>{t('paljukatsomo-title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="palju" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <ImageWrapper>
              <Image
                src={banner}
                layout="fill"
                alt="Background graphics"
                priority
              />
            </ImageWrapper>
            <H1>{t('paljukatsomo-heading')}</H1>
            <InfoContainer>
              <InfoTextContainer>
                {t('paljukatsomo-body')
                  .split('\n')
                  .map((p, i) => (
                    <P key={i}>{p}</P>
                  ))}
              </InfoTextContainer>
              <InfoTextContainer>
                <LargeText>{t('paljukatsomo-what')}</LargeText>
                <LargeText>{t('paljukatsomo-where')}</LargeText>
                <LargeText>{t('paljukatsomo-when')}</LargeText>
                <LargeText>{t('paljukatsomo-why')}</LargeText>
              </InfoTextContainer>
            </InfoContainer>
          </Container>
        </EventsSection>
      </Layout>
    </>
  );
};

const EventsSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding-top: 6rem;
  background-color: #001155;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.betoni};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1024px; */
  width: 100%;
  padding: 0 1.5em;
  margin-bottom: 4rem;
  min-height: 100vh;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

const InfoContainer = styled.section`
  color: ${({ theme }) => theme.colors.betoni};
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 8rem;
  padding-bottom: 4rem;
  gap: 2rem;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bolder;
  margin-top: -4rem;
  margin-bottom: 2rem;
  font-family: 'KionaBold';
  line-height: 1;
  z-index: 2;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;

  & > a {
    color: inherit;
  }
`;

const LargeText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'KionaBold';
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: -20rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    margin-bottom: -10rem;
  }
`;

const InfoTextContainer = styled.div`
  margin: 1rem;
  color: ${({ theme }) => theme.colors.betoni};
`;

export default MagicOfTechnologyPage;
