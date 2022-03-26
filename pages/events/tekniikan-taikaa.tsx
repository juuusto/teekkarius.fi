import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';

import banner from '../../public/images/tekniikantaikaa.jpg';
import texture from '../../public/images/paperitekstuuri.jpg';
import map from '../../public/images/tekniikan_taikaa_kartta.png';

const MagicOfTechnologyPage = () => {
  const { t } = useTranslation('events');

  return (
    <>
      <Head>
        <title>{t('MoT-title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <ImageWrapper>
              <Image
                src={banner}
                layout="fill"
                alt="Magic of Technology"
                priority
              />
            </ImageWrapper>
            <InfoContainer>
              <BackgroundImageWrapper>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image src={texture} layout="fill" alt="" priority />
                </div>
              </BackgroundImageWrapper>
              <InfoTextContainer>
                <H1>{t('MoT-heading')}</H1>
                {t('MoT-body')
                  .split('\n')
                  .map((p, i) => (
                    <P key={i}>{p}</P>
                  ))}
              </InfoTextContainer>
              <InfoTextContainer>
                <H2>28.-30.3. @DIPOLI</H2>
                <LargeText>{t('MoT-monday')}</LargeText>
                <LargeText>{t('MoT-tuesday')}</LargeText>
                <LargeText>{t('MoT-wednesday')}</LargeText>
                <LargeText>{t('MoT-entry')}</LargeText>
                <MapImageWrapper>
                  <Image
                    src={map}
                    layout="fill"
                    alt="Magic of Technology map"
                    priority
                  />
                </MapImageWrapper>
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
  background: rgb(61, 0, 36);
  background: linear-gradient(
    156deg,
    rgba(61, 0, 36, 1) 0%,
    rgba(145, 23, 31, 1) 100%
  );
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
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  font-family: 'KionaBold';
  line-height: 1;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-family: 'KionaBold';
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  & > a {
    color: inherit;
  }
`;

const LargeText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-family: 'KionaBold';

  &:last-of-type {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`;
const MapImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
const BackgroundImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

const InfoTextContainer = styled.div`
  margin: 1rem;
  color: ${({ theme }) => theme.colors.pimiä};
`;

export default MagicOfTechnologyPage;
