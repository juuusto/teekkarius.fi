import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Kutsu from '../components/Kutsu';
import ReactMarkdown from 'react-markdown';
import PartnersSection from '../components/frontpage/PartnersSection';

// tpj sivun yhteistyökumppanit
const partners = [
  {
    name: 'Ramboll',
    logoPath: '/partner_logos/ramboll_logo.png',
    main: true,
  },
  {
    name: 'FCG',
    logoPath: '/partner_logos/FCG_logo.png',
    main: false,
  },
  {
    name: 'Vaisala',
    logoPath: '/partner_logos/Vaisala_logo.png',
    main: false,
  },
  {
    name: 'TEK',
    logoPath: '/partner_logos/TEK_logo.png',
    main: false,
  },
  {
    name: 'ABB',
    logoPath: '/partner_logos/ABB_logo.svg',
    main: false,
  },
  {
    name: 'aTalent',
    logoPath: '/partner_logos/aTalent_logo.svg',
    main: false,
  },
  {
    name: 'Espoo',
    logoPath: '/partner_logos/espoo_logo.svg',
    main: false,
  },
  {
    name: 'Deloitte',
    logoPath: '/partner_logos/deloitte_logo.png',
    main: false,
  },
  {
    name: 'Sievo',
    logoPath: '/partner_logos/sievo_logo.png',
    main: false,
  },
  {
    name: 'Siili',
    logoPath: '/partner_logos/siili_logo.png',
    main: false,
  },
];

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
              <H1>{t('tpj-ukk-info')}</H1>
              {/* {t('tpj-ukk')
                .split('\n')
                .map((p, i) => (
                  <P key={i}>{p}</P>
                ))} */}
              <StyledMarkdown>{t('tpj-ukk')}</StyledMarkdown>
            </InfoContainer>
          </Container>
        </EventsSection>
        <PartnersSection
          partners={partners}
          onlyOneMainSponsor
          mainTitle={t('tpj-mainpartners')}
          othersTitle={t('tpj-partners')}
        />
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

  & > a {
    font-size: 1rem;
    color: inherit;
  }

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

const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 1rem;

  & > * {
    margin-bottom: 0.7rem;
  }

  & > p {
    margin-bottom: 1.5rem;
  }

  & a {
    color: inherit;
  }
`;

export default MagicOfTechnologyPage;
