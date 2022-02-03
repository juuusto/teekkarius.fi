import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teekkarius.fi</title>
        <meta name="description" content="Teekarius-sivu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hellou maailma!</h1>
    </div>
  );
};

export default Home;
