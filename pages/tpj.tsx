import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Kutsu from '../components/Kutsu';

const MagicOfTechnologyPage = () => {
  const { t } = useTranslation('events');

  return (
    <>
      <Head>
        <title>{t('Teekkariperinnejuhla')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <H1>{t('tpj-title')}</H1>
            <KutsuContainer>
              <Kutsu />
            </KutsuContainer>
            <InfoContainer>
              <H1>{t('tpj-info')}</H1>
              {t('tpj-body')
                .split('\n')
                .map((p, i) => (
                  <P key={i}>{p}</P>
                ))}
              <P>
                {' '}
                <a href="https://kide.app/help/terms">
                  https://kide.app/help/terms
                </a>
              </P>
              {t('tpj-body-2')
                .split('\n')
                .map((p, i) => (
                  <P key={i}>{p}</P>
                ))}
              <P>
                <a
                  href="https://www.ayy.fi/fi/hallinnolliset-asiakirjat/turvallisemman-tilan-periaatteet"
                  target="_blank"
                  rel="noreferrer"
                >
                  AYY Code of Conduct
                </a>
              </P>
              <P>{t('tpj-body-ending')
                .split('\n')
                .map((p, i) => (
                  <P key={i}>{p}</P>
                ))}</P>
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  padding: 0 1.5em;
  margin-bottom: 4rem;
  min-height: 100vh;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

const KutsuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 1000px;
  height: auto;
  width: 100%;
`;

const InfoContainer = styled.section`
  color: ${({ theme }) => theme.colors.betoni};
  position: relative;
  width: 100%;
  padding: 2rem 8rem;
  padding-bottom: 4rem;
  gap: 2rem;
  margin-top: 2rem;

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
  margin-bottom: 4rem;
  font-family: 'KionaBold';
  line-height: 1;
  z-index: 2;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const H2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1;
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
