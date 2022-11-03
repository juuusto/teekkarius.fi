import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import QuestionCard from '../components/quiz/QuestionCard';
import { mode } from '../utils/mode';

export type Question = {
  title: string;
  answers: Answer[];
};

type Answer = {
  title: string;
  eventId: number | null;
};

type Event = {
  title: string;
  id: number;
};

const events: Event[] = [
  {
    title: 'Teekkariuden Tie',
    id: 1,
  },
  {
    title: 'Megakroketti',
    id: 2,
  },
  {
    title: 'Tekniikan Kehdot',
    id: 3,
  },
  {
    title: 'Kiltakoitokset',
    id: 4,
  },
  {
    title: 'Fuksien juhlasitsit',
    id: 5,
  },
  {
    title: 'IG-sitsit',
    id: 6,
  },
  {
    title: 'Polin Approt',
    id: 7,
  },
  {
    title: 'Punaisen läpilaulanta',
    id: 8,
  },
  {
    title: 'Laulukilpailusitsit',
    id: 9,
  },
  {
    title: 'Elonkorjuu',
    id: 10,
  },
  {
    title: 'RWBK:n Teekkarius 150 - konsertti',
    id: 11,
  },
  {
    title: 'Kullervo-konsertti',
    id: 12,
  },
  {
    title: 'Radio Diodi:n kuuntelu!',
    id: 13,
  },
];

const questions: Question[] = [
  {
    title: 'Mikä seuraavista on musiikkia korvillesi?',
    answers: [
      {
        title: 'Ihastuttava Lontoon murre',
        eventId: 6,
      },
      { title: 'Viulujen sävelet', eventId: 12 },
      { title: 'Basson jumputus', eventId: 7 },
      { title: 'Trumpettien ilosoinnut', eventId: 11 },
    ],
  },
  {
    title: 'Lempitapasi nähdä muita ihmisiä?',
    answers: [
      {
        title: 'Treffit kaverin kanssa radiota kuunnellen',
        eventId: 13,
      },
      { title: 'Laulaen muiden vieressä istuen', eventId: 9 },
      { title: 'Kuunnella jonkun tarinointia', eventId: 3 },
      { title: 'Sitsaten ja uusiin ihmisiin tutustuen', eventId: 6 },
    ],
  },
  {
    title: 'Lempirakennuksesi Otaniemessä?',
    answers: [
      {
        title: 'Apollo, vaikka se ei ole Otaniemessä',
        eventId: 7,
      },
      { title: 'Smökkitie kotiin vie', eventId: 10 },
      { title: 'Yliopiston tilat hellivät', eventId: 3 },
      { title: 'Oma kiltis, rakkain kiltis', eventId: 4 },
    ],
  },
  {
    title: 'Missä laulat hymnin?',
    answers: [
      {
        title: 'Liikkuvan lakin luona keskiyöllä',
        eventId: null,
      },
      { title: 'DIY lakin luona keskiyöllä', eventId: null },
      { title: 'Suuren lakin luona keskiyöllä', eventId: null },
      { title: 'Paikkaa vaihtavan lakin luona keskiyöllä', eventId: null },
    ],
  },
  {
    title: 'Olet?',
    answers: [
      {
        title: 'Fuksi',
        eventId: 5,
      },
      { title: 'Teekkari', eventId: 2 },
      { title: 'Valmistunut', eventId: 11 },
      { title: 'Teekkarin tai DI:n seurasta nauttiva!', eventId: 1 },
    ],
  },
  {
    title: 'Mikä seuraavista adjektiiveista resonoi kanssasi parhaiten?',
    answers: [
      {
        title: 'Fiini',
        eventId: 10,
      },
      { title: 'Äänekäs', eventId: 9 },
      { title: 'Perinteinen', eventId: 8 },
      { title: 'Ainutlaatuinen', eventId: 4 },
    ],
  },
  {
    title: 'Paras osa juhlavuotta?',
    answers: [
      {
        title: 'Juhlavaakin juhlavampi Teekkariperinnejuhla!',
        eventId: 12,
      },
      { title: 'Teekkariperinneviikkojen tuleva hulina!', eventId: 1 },
      { title: 'Aikaisemmat juhlavuositapahtumat kerran kuussa!', eventId: 2 },
      { title: 'Yleinen hype ja fiilistely!', eventId: 13 },
    ],
  },
];

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const handleNext = (eventId: number | null) => {
    if (typeof eventId === 'number') {
      setQuizAnswers((prev) => [...prev, eventId]);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setQuizAnswers([]);
    setCurrentIndex(0);
  };

  const getBestEvent = () => {
    const id = mode(quizAnswers);
    const event = events.filter((e) => e.id === id);
    return event[0]?.title;
  };

  return (
    <>
      <Head>
        <title>{'T150 Event Quiz'}</title>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <EventsSection>
          <Container>
            <H1>{'Löydä sopivin TPV tapahtuma!'}</H1>
            {currentIndex >= questions.length ? (
              <EndCard>
                <p>Sinulle sopivin tapahtuma on</p>
                <h2>{getBestEvent()}</h2>
                <PlayAgainButton onClick={handleReset}>
                  Kokeile uudestaan
                </PlayAgainButton>
              </EndCard>
            ) : (
              <QuestionCard
                question={questions[currentIndex]}
                currentIndex={currentIndex}
                total={questions.length}
                handleNext={handleNext}
              />
            )}
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

const EndCard = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: rgba(1, 1, 1, 0.2);
  border-radius: 1rem;
  text-align: center;
  padding-top: 2rem;

  & > h2 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const PlayAgainButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  margin: 1rem;
  color: inherit;
  background: rgba(1, 1, 1, 0.2);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default QuizPage;
