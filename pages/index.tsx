import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const H1 = styled.h1`
  font-size: 3.5em;
  color: ${({ theme }) => theme.colors.test};
  height: 100%;
`;

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekarius-sivu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <H1>{t('common:hello-world')}</H1>
      </Layout>
    </>
  );
};

export default Home;
