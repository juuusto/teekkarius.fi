import useTranslation from 'next-translate/useTranslation';
import React from 'react';
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
      <div>{children}</div>
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
  grid-template-columns: 1fr;
  margin-bottom: 4rem;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  margin-bottom: 0.5rem;
`;

export default Activity;
