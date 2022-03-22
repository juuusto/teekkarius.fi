import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import Activity from '../../components/activities/Activity';
import PointCardCanvas from '../../components/activities/PointCardCanvas';
import miettijä from '../../public/images/miettijä.jpg';
import Image from 'next/image';

const ActivitiesPage = () => {
  const { t } = useTranslation('activities');
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
            <Activity title="point-card-title" body="point-card-body">
              <PointCardCanvas />
            </Activity>
            <Activity title="magazine-title" body="magazine-body">
              <Image
                src={miettijä}
                alt="History magazine"
                layout="fill"
                priority
              />
            </Activity>
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
  max-width: 1400px;
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

export default ActivitiesPage;
