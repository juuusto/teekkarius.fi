import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Frontpage from '../components/frontpage/Frontpage';

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
        <Frontpage />
      </Layout>
    </>
  );
};

export default Home;
