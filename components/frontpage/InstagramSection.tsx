import React from 'react';
import styled from 'styled-components';

type Props = {
  feed: InstagramPost[] | null;
};

const InstagramSection = ({ feed }: Props) => {
  return (
    <Section>
      <H2>Instagram</H2>
      <Container>
        {feed?.map((item: InstagramPost) => (
          <ImageLink
            key={item.id}
            href={item.permalink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.media_url.replace(/^[^.]*/, 'https://scontent-hel3-1')}
              alt="Instagram feed"
            />
          </ImageLink>
        ))}
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.betoni};
`;

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 1600px;
  gap: 1.5rem;
  padding: 6rem;
  padding-top: 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const ImageLink = styled.a`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  cursor: pointer;
`;

export default InstagramSection;
