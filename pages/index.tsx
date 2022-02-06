import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3.5em;
  color: ${({ theme }) => theme.colors.test};
`;

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('home:title')}</title>
        <meta name="description" content="Teekarius-sivu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1>{t('hello-world')}</H1>
      <button onClick={async () => await setLanguage('fi')}>FI</button>
      <button onClick={async () => await setLanguage('en')}>EN</button>
      <button onClick={async () => await setLanguage('sv')}>SV</button>
    </>
  );
};

export default Home;
