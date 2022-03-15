import useTranslation from 'next-translate/useTranslation';
import React, { Suspense } from 'react';
import styled from 'styled-components';

type PropTypes = {
  children: React.ReactNode;
  title: string;
  body: string;
};

const Activity = ({ children, title, body }: PropTypes) => {
  const { t } = useTranslation('activities');
  return (
    <Container>
      <Div>{children}</Div>
      <div>
        <H2>{t(title)}</H2>
        {t(body)
          .split('\n')
          .map((p, i) => (
            <P key={i}>{p}</P>
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;
  gap: 2rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 3fr 5fr;
  }
`;

const Div = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: left;
    font-size: 2rem;
  }
`;

const P = styled.p`
  margin-bottom: 0.5rem;
`;

export default Activity;