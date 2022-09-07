import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const TorniParts = [
  { title: 'Polin Appro', latest: false, open: true },
  { title: 'Viimeisin tapahtuma', latest: true, open: true },
  { title: 'Tätä ei oo viel julkastu', latest: false, open: false },
];

const TPVPage = () => {
  const { t } = useTranslation('events');

  return (
    <>
      <Head>
        <title>{t('tpv-title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <Section>
          <Container>
            <H1>{t('tpv-title')}</H1>
            <img src={'/torni/tornihuippu.png'} alt="Top of the Poli tower" />
            {TorniParts.map((torni, index) => (
              <TorniContainer key={index}>
                <TorniImage src={'/torni/torni.png'} alt="" />
                <TorniInfo>
                  <KarmiContainer>
                    <Karmi glow={torni.latest}>
                      <KarmiImage
                        style={{ marginBottom: 20 }}
                        src="/torni/ikkunamask.svg"
                        alt=""
                      />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                    <Karmi glow={torni.latest}>
                      <KarmiImage src="/torni/ikkunamask.svg" alt="" />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                    <Karmi glow={torni.latest}>
                      <KarmiImage src="/torni/ikkunamask.svg" alt="" />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                  </KarmiContainer>
                  <H2>{torni.title}</H2>
                </TorniInfo>
              </TorniContainer>
            ))}
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

const TorniContainer = styled.section`
  padding: 0 clamp(10px, 4vw, 37px);
  width: 100%;
  position: relative;
`;

const TorniInfo = styled.div`
  position: absolute;
  inset: 0 clamp(10px, 4vw, 37px);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const TorniImage = styled.img``;

const KarmiImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  margin: 0 auto;
`;

const KarmiContainer = styled.div`
  height: 70%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  width: 80%;
  justify-content: center;
  gap: clamp(1rem, 4vw, 6rem);
`;

const Karmi = styled.div<{ glow: boolean }>`
  position: relative;
  width: 100%;
  filter: ${(p) => (p.glow ? 'drop-shadow( 0px 0px 20px #fffaa5)' : '')};
`;

export default TPVPage;
