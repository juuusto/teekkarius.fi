import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const TorniParts = [
  { 
    title: 'Teekkariuden tie', 
    title_en: 'Road of Teekkarius',
    date: '6.11',
    latest: false,
    open: true,
    imgPath1: '/torni/teekkariudentie/ikkuna1.svg',
    imgPath2: '/torni/teekkariudentie/ikkuna2.svg',
    imgPath3: '/torni/teekkariudentie/ikkuna3.svg',
    link: 'https://www.facebook.com/events/1158343711561948' },
  {
    title: 'Megakroketti',
    title_en: 'Mega Croquet',
    date: '7.11',
    latest: false,
    open: true,
    imgPath1: '/torni/megakroke/megakroke_1.svg',
    imgPath2: '/torni/megakroke/megakroke_2.svg',
    imgPath3: '/torni/megakroke/megakroke_3.svg',
    link: 'https://www.facebook.com/events/800214767834651',
  },
  { title: '', latest: false, open: false },
  {
    title: 'Polin Appro',
    title_en: 'Polin Appro',
    date: '9. - 10.11',
    latest: false,
    open: true,
    imgPath1: '/torni/polin_appro/polin_appro1.svg',
    imgPath2: '/torni/polin_appro/polin_appro2.svg',
    imgPath3: '/torni/polin_appro/polin_appro3.svg',
    link: 'https://www.facebook.com/events/1438238686664471',
  },
  {
    title: 'Elonkorjuu',
    title_en: 'Elonkorjuu',
    date: '11.11',
    latest: false,
    open: true,
    imgPath1: '/torni/elonkorjuu/elonkorjuu1.png',
    imgPath2: '/torni/elonkorjuu/elonkorjuu2.png',
    imgPath3: '/torni/elonkorjuu/elonkorjuu3.png',
    link: 'https://www.facebook.com/events/363702765836992',
  },
  { title: '', latest: false, open: false },
  { title: '', latest: false, open: false },
  { title: '', latest: false, open: false },
  { title: '', latest: false, open: false },
  { title: 'Laulukilpailusitsit', 
    title_en: 'Song Contest Sitsit',
    date: '16.11',
    latest: false, 
    open: true,
    imgPath1: '/torni/elonkorjuu/elonkorjuu1.png',
    imgPath2: '/torni/elonkorjuu/elonkorjuu2.png',
    imgPath3: '/torni/elonkorjuu/elonkorjuu3.png',    
    link: 'https://www.facebook.com/events/482830250144981/'},
  { title: '', latest: false, open: false },
  { title: '', latest: false, open: false },
  { title: '', latest: false, open: false },
];

const TPVPage = () => {
  const { t, lang } = useTranslation('events');
  const titleRef = useRef<any>(null);

  useEffect(() => {
    const elementPosition = titleRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 200;
    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 500);
  }, []);

  const handleScroll = () => {};

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
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <img
                src={'/torni/tornihuippu.png'}
                alt="Top of the Poli tower"
                onLoad={handleScroll}
              />
              <H1 ref={titleRef}>{t('tpv-title')}</H1>
            </div>
            {TorniParts.map((torni, index) => (
              <TorniContainer key={index}>
                <TorniImage src={'/torni/torni.png'} alt="" />
                <TorniInfo>
                  <KarmiContainer>
                    <Karmi
                      glow={torni.latest}
                      href={torni.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <KarmiImage
                        src={
                          torni.open ? torni.imgPath1 : '/torni/ikkunaovet.svg'
                        }
                        alt=""
                      />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                    <Karmi
                      glow={torni.latest}
                      href={torni.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <KarmiImage
                        src={
                          torni.open ? torni.imgPath2 : '/torni/ikkunaovet.svg'
                        }
                        alt=""
                      />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                    <Karmi
                      glow={torni.latest}
                      href={torni.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <KarmiImage
                        src={
                          torni.open ? torni.imgPath3 : '/torni/ikkunaovet.svg'
                        }
                        alt=""
                      />
                      <KarmiImage src="/torni/karmit.svg" alt="" />
                    </Karmi>
                  </KarmiContainer>
                  <H2>{lang === 'fi' ? torni.title : torni.title_en}</H2>
                  <H2>{torni.date}</H2>
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
  margin-top: 10rem;
  margin-bottom: 4rem;
  font-family: 'KionaBold';
  line-height: 1;
  z-index: 2;

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: clamp(4rem, 30vw, 20rem);

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
  height: 80%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  width: 80%;
  justify-content: center;
  gap: clamp(1rem, 4vw, 6rem);
`;

const Karmi = styled.a<{ glow: boolean }>`
  position: relative;
  width: 100%;
  display: grid;
  filter: ${(p) => (p.glow ? 'drop-shadow( 0px 0px 10px #fffaa5)' : '')};
`;

export default TPVPage;
