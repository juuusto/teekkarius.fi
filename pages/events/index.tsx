import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import EventCard from '../../components/events/EventCard';
import FilterButton from '../../components/events/FilterButton';
import Image from 'next/image';
import skumppalasit from '../../public/images/Skumppalasit.svg';
import lakki from '../../public/images/Lakki.svg';

type Props = {
  events: T150Event[];
};

const filterEvents = (events: T150Event[], filter: string) => {
  switch (filter) {
    case 't150':
      return events.filter((event) => event.Teekkarius150);
    case 'community':
      return events.filter((event) => !event.Teekkarius150);
    default:
      return events;
  }
};

const EventsPage = ({ events }: Props) => {
  const [filter, setFilter] = useState('all');
  const { t } = useTranslation('events');

  const filteredEvents = filterEvents(events, filter);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <H1>{t('heading')}</H1>
            <P>
              {t('add-event')}{' '}
              <a
                href="https://forms.office.com/r/uHicfDL90D"
                target="_blank"
                rel="noreferrer"
              >
                {t('add-event-link')}
              </a>
              .
            </P>
            <FilterButtonContainer>
              <FilterButton
                active={filter === 'all'}
                setFilter={() => setFilter('all')}
              >
                {t('all')}
              </FilterButton>
              <FilterButton
                active={filter === 't150'}
                setFilter={() => setFilter('t150')}
              >
                Teekkarius 150
              </FilterButton>
              <FilterButton
                active={filter === 'community'}
                setFilter={() => setFilter('community')}
              >
                {t('community')}
              </FilterButton>
            </FilterButtonContainer>
            {filteredEvents.length === 0 && <p>No events found.</p>}
            {filteredEvents.map((event, i) => (
              <EventCard
                key={event.id + Math.random()}
                event={event}
                flipped={i % 2 === 0 ? false : true}
                i={i}
                last={i === filteredEvents.length - 1}
              />
            ))}
          </Container>
          <ImageWrapper>
            <Image
              src={lakki}
              layout="fill"
              alt=""
              aria-hidden
              draggable={false}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src={skumppalasit}
              layout="fill"
              alt=""
              aria-hidden
              draggable={false}
            />
          </ImageWrapper>
        </EventsSection>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/events?_sort=StartDate`
  );
  const events = await res.json();

  // Pass data to the page via props
  return { props: { events } };
}

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
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
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
  text-align: center;
  margin-bottom: 1rem;

  & > a {
    color: inherit;
  }
`;

const FilterButtonContainer = styled.div`
  /* margin-bottom: 2rem; */
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 60vw;
  height: 1000px;
  top: 200px;
  left: -20%;
  opacity: 0.1;
  transform: rotate(-20deg);

  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  z-index: 0;

  &:nth-of-type(3) {
    top: 300px;
    left: auto;
    right: -20%;
    transform: rotate(20deg);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default EventsPage;
