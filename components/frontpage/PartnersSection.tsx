import React from 'react';
import styled from 'styled-components';

const PartnersSection = () => {
  return (
    <Section>
      <Container>
        <H2>Lorem, ipsum dolor.</H2>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.portviini};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1024px;
  width: 100%;
  padding: 3rem 1.5rem;
  color: ${({ theme }) => theme.colors.betoni};
`;

const H2 = styled.h2`
  font-size: 2em;
`;

export default PartnersSection;
