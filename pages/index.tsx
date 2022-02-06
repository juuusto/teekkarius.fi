import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{t('home:title')}</title>
        <meta name="description" content="Teekarius-sivu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{t('hello-world')}</h1>
      <button onClick={async () => await setLanguage('fi')}>FI</button>
      <button onClick={async () => await setLanguage('en')}>EN</button>
      <button onClick={async () => await setLanguage('sv')}>SV</button>
    </div>
  );
};

export default Home;
