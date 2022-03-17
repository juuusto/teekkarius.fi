import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import Portrait from '../../components/common/Portrait';

const CorporateRelationsPage = () => {
  const { t } = useTranslation('corporate');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <Section>
          <Container>
            <H1>{t('heading')}</H1>
            {t('body')
              .split('\n')
              .map((p, i) => (
                <P key={i}>{p}</P>
              ))}
            <H2>{t('contact-heading')}</H2>
            <ContactContainer>
              <P>{t('contact-body')}</P>
              <Portrait />
              <Name>Laura Aalto</Name>
              <Email>{t('email')}</Email>
            </ContactContainer>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

const Section = styled.section`
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
  max-width: 1024px;
  width: 100%;
  padding: 0 1.5em;
  min-height: 100vh;
  z-index: 1;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'KionaBold';
`;

const H2 = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

const P = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const Name = styled.h3`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const Email = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-style: italic;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  margin-bottom: 4rem;
`;

export default CorporateRelationsPage;
