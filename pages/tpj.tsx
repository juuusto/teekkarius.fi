import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Kutsu from '../components/Kutsu';

const MagicOfTechnologyPage = () => {
  const { t } = useTranslation('events');

  return (
    <>
      <Head>
        <title>{t('Teekkariperinnejuhla')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <H1>Teekkariperinnejuhla</H1>
            <KutsuContainer>
              <Kutsu />
            </KutsuContainer>
            <InfoContainer>
              <H2>Infoa</H2>
              <P>
                Ilmoittautuminen 150. Teekkariperinnejuhlaan on auki
                kutsuvieraille 1.-15.6. ja jäsenille 22.6-31.7. Ilmoittautuminen
                tapahtuu kide.appissa, jota varten tarvitset oman tilin, jotta
                pystyt ostamaan sieltä tuotteita. Tili kannattaa luoda ennen
                ilmoittautumisen aukeamista ja apua tähän saat seuraavasta
                osoitteesta{' '}
                <a href="https://kide.app/help/terms">
                  https://kide.app/help/terms
                </a>
                . Kide.app toimii sekä verkkosivuilla sekä sovelluksena
                kännykässä. Ilmoittautumislinkin löydät klikkaamalla yllä olevan
                kutsun sinettiä!
              </P>
              <P>
                Ilmoittautumisessa kysytään osallistujatiedot, sekä esimerkiksi
                sähköpostiosoite, jonne laitetaan kaikki tuleva informaatio
                juhliin liittyen. Jos sinulla on avec, niin hänen tulee
                ilmoittautua myös erikseen, mutta saat ostettua maksimissaan
                kaksi lippua, jolloin saat täytettyä tarvittavat tiedot samalla
                ostokerralla myös avecillesi. Ilmotietoja saa muokattua
                ilmoittautumisen jälkeen helposti kide.apissa 7.8. asti.
                Huomaathan että ostotapahtuma on sitova.
              </P>
              <P>
                Tapahtumassa on myös käytössä Aalto-yliopiston ylioppilaskunnan
                Code of Conduct, joka jokaisen osallistujan tulee hyväksyä lipun
                ostaakseen. Tämän avulla haluamme varmistaa että tapahtuma on
                jokaiselle osallistujalle turvallinen ja mielekäs tapahtuma.
                Emme hyväksy minkäänlaista kiusaamista tai syrjintää
                tapahtumassa. Lisätietoa ylioppilaskunnan Code of Conductista
                voit löytää{' '}
                <a
                  href="https://www.ayy.fi/fi/hallinnolliset-asiakirjat/turvallisemman-tilan-periaatteet"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  AYY:n nettisivuilta
                </a>
                .
              </P>
              <P>
                Tervetuloa 150. Teekkariperinnejuhlaan! Lisää kysymyksiä voi
                laittaa osoitteeseen <i>teekkarius150@ayy.fi</i>.
              </P>
            </InfoContainer>
          </Container>
        </EventsSection>
      </Layout>
    </>
  );
};

const EventsSection = styled.section`
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

const KutsuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 1000px;
  height: auto;
  width: 100%;
`;

const InfoContainer = styled.section`
  color: ${({ theme }) => theme.colors.betoni};
  position: relative;
  width: 100%;
  padding: 2rem 8rem;
  padding-bottom: 4rem;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    padding: 2rem 4rem;
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

const H2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1;
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;

  & > a {
    color: inherit;
  }
`;

const LargeText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'KionaBold';
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: -20rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    margin-bottom: -10rem;
  }
`;

const InfoTextContainer = styled.div`
  margin: 1rem;
  color: ${({ theme }) => theme.colors.betoni};
`;

export default MagicOfTechnologyPage;
