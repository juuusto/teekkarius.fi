import React from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Partner = {
  name: string;
  logoPath: string;
};

type Props = {
  partners: Partner[];
};

const PartnersSection = ({ partners }: Props) => {
  const { t } = useTranslation('home');
  return (
    <Section>
      <Container>
        <H2>{t('partners')}</H2>
        <LogosContainer>
          {partners.map((partner) => (
            <Logo key={partner.name}>
              <Image
                src={partner.logoPath}
                alt={partner.name}
                width="200px"
                height="200px"
              />
            </Logo>
          ))}
        </LogosContainer>
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
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  max-width: 1024px;
  width: 100%;
  padding: 6rem 1.5rem;
  color: ${({ theme }) => theme.colors.betoni};
`;

const H2 = styled.h2`
  font-size: 2em;
  margin: 3rem 0;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PartnersSection;