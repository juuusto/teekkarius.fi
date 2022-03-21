import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import ContactCard from '../../components/contact/ContactCard';

const persons: Person[] = [
  { name: 'Linda Loukamo', fi: 'Puheenjohtaja', en: 'Chair' },
  { name: 'Heidi Välisalmi', fi: 'Varapuheenjohtaja', en: 'Vice chair' },
  { name: 'Samu Nurmi', fi: 'Tuottaja', en: 'Producer' },
  {
    name: 'Laura Aalto',
    fi: 'Yrityssuhdevastaava',
    en: 'Corporate Relations Officer',
  },
  {
    name: 'Mari Pulkkinen',
    fi: 'Viestintävastaava',
    en: 'Communications Officer',
  },
  {
    name: 'Kaisa Kärkkäinen',
    fi: 'Markkinointivastaava',
    en: 'Marketing Officer',
  },
  {
    name: 'Vesta Kulomaa',
    fi: 'Perinneviikkovastaava',
    en: 'Traditions Week Officer',
  },
  {
    name: 'Milja Koskela',
    fi: 'Vuosijuhlavastaava',
    en: 'Annual Ball Officer',
  },
  {
    name: 'Silva Robbins',
    fi: 'Biletapahtumavastaava',
    en: 'Party event Officer',
  },
  {
    name: 'Susanna Karlqvist',
    fi: 'Yhteisötapahtumavastaava',
    en: 'Community Events Officer',
  },
  { name: 'Lassi Mäkelä', fi: 'Projektivastaava', en: 'Project Officer' },
  {
    name: 'Oskari Järvinen',
    fi: 'Teknologiavastaava',
    en: 'Technology Officer',
  },
];

const ContactPage = () => {
  const { t, lang } = useTranslation('contact');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <Section>
          <Container>
            <H1>{t('heading')}</H1>
            <P>
              {t('body')} <i>{t('contact-email')}</i>.
            </P>
            <ContactContainer>
              {persons.map((person) => (
                <ContactCard
                  key={person.name}
                  name={person.name}
                  occupation={lang === 'fi' ? person.fi : person.en}
                />
              ))}
            </ContactContainer>
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
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  padding: 0 1.5em;
  min-height: 100vh;
  z-index: 1;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'KionaBold';
`;

const P = styled.p`
  margin-bottom: 1rem;
  max-width: 800px;
  & > a {
    color: inherit;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  margin-bottom: 8rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default ContactPage;
