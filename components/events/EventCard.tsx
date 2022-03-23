import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import t150 from '../../public/images/T150.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  event: T150Event;
  flipped: boolean;
  i: number;
  last: boolean;
};

const EventCard = ({ event, flipped, i, last }: Props) => {
  const { t, lang } = useTranslation('events');

  // Set event attributes according to current language
  // If no Finnish translations, fallback to English
  const title = lang === 'fi' && event.Nimi ? event.Nimi : event.Title;
  const description =
    lang === 'fi' && event.Kuvaus ? event.Kuvaus : event.Description;

  // Parse date format, 2022-04-10 -> 10.4.
  const date = `${event.StartDate.slice(-2).replace(
    /^0+/,
    ''
  )}.${event.StartDate.slice(-5, -3).replace(/^0+/, '')}.`;

  return (
    // $-starting variables are not passed to DOM -> no Next.js error
    <Card
      $flipped={flipped}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 + i * 0.3 } }}
    >
      <Date $flipped={flipped}>{date}</Date>
      {event.Teekkarius150 && (
        <T150Wrapper>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={t150} layout="fill" alt="T150 logo" draggable={false} />
          </div>
        </T150Wrapper>
      )}
      <Title>{title}</Title>
      <Organizer>{event.Organizer}</Organizer>
      <P>{description}</P>
      <Link href={event.Link} passHref>
        <A target="_blank" rel="noreferrer">
          {t('eventPage')}
        </A>
      </Link>
      {!last && (
        <Line
          as={motion.span}
          $flipped={flipped}
          initial={{ height: 0 }}
          animate={{ height: 'calc(100% + 40px)' }}
          transition={{
            delay: 0.5 + i * 0.3,
            default: { duration: 0.25, ease: 'linear' },
          }}
        />
      )}
    </Card>
  );
};

const Card = styled.div<{ $flipped: boolean }>`
  /* background-color: ${({ theme }) => theme.colors.portviini}; */
  padding: 1rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.betoni};
  margin-left: 60px;
  margin-right: 5px;
  width: calc(100% - 65px);
  position: relative;

  @media screen and (min-width: 800px) {
    width: calc(50% - 60px);

    margin-left: 0;
    margin-right: 0;
    align-self: ${({ $flipped }) => ($flipped ? 'flex-start' : 'flex-end')};
  }
`;

const Date = styled.span<{ $flipped: boolean }>`
  position: absolute;
  left: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.portviini};

  /* display: none; */

  @media screen and (min-width: 800px) {
    left: ${({ $flipped }) => ($flipped ? 'auto' : '-90px')};
    right: ${({ $flipped }) => ($flipped ? '-90px' : 'auto')};
  }
`;

const T150Wrapper = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  transform: rotate(10deg);
  right: 20px;
  top: -20px;
  opacity: 0.3;

  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Title = styled.h2`
  /* margin-bottom: 0.25rem; */
  @media screen and (max-width: 800px) {
    font-size: 1.125rem;
  }
`;

const Organizer = styled.p`
  /* text-transform: uppercase; */
  font-weight: bold;
  font-family: 'KionaBold';
  opacity: 0.5;
  margin-bottom: 1rem;
`;

const P = styled.p`
  margin-bottom: 1.5rem;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.betoni};
  background-color: ${({ theme }) => theme.colors.portviini};
  font-family: 'KionaBold';
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  margin-top: 1rem;
`;

const Line = styled.span<{ $flipped: boolean }>`
  position: absolute;
  top: 46px;
  width: 10px;
  max-height: calc(100% + 20px);
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.portviini};

  left: -35px;

  @media screen and (min-width: 800px) {
    left: ${({ $flipped }) => ($flipped ? 'auto' : '-65px')};
    right: ${({ $flipped }) => ($flipped ? '-65px' : 'auto')};
  }
`;

export default EventCard;
