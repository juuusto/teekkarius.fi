import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout/Layout';
import Frontpage from '../components/frontpage/Frontpage';

const Home: NextPage = ({ feed }: any) => {
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
        <Frontpage feed={feed} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from external API

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.IG_KEY}&limit=9`
  );
  const feed = await res.json();

  // Pass data to the page via props
  return { props: { feed }, revalidate: 300 };
}

export default Home;
