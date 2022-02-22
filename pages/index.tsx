import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout/Layout';
import Frontpage from '../components/frontpage/Frontpage';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/ArtifaktElement.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Kiona-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Evogria.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Layout
        navColor="pimiä"
        imageUrl="/images/kotitausta.jpg"
        setImage={true}
      >
        <Frontpage />
      </Layout>
    </>
  );
};

export default Home;
