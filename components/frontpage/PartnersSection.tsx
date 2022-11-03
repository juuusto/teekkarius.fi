import React from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

type Partner = {
  name: string;
  logoPath: string;
  main: boolean;
};

type Props = {
  partners: Partner[];
  onlyOneMainSponsor?: boolean;
  mainTitle: string | React.ReactNode;
  othersTitle: string | React.ReactNode;
};

const PartnersSection = ({
  partners,
  onlyOneMainSponsor,
  mainTitle,
  othersTitle,
}: Props) => {
  return (
    <Section>
      <Container>
        <H2>{mainTitle}</H2>
        <MainLogosContainer $oneColumn={onlyOneMainSponsor}>
          {partners
            .filter((p) => p.main)
            .map((partner) => (
              <MainLogo key={partner.name}>
                <img src={partner.logoPath} alt={partner.name} />
              </MainLogo>
            ))}
        </MainLogosContainer>
        <H2>{othersTitle}</H2>
        <LogosContainer>
          {partners
            .filter((p) => !p.main)
            .map((partner) => (
              <Logo key={partner.name}>
                <img src={partner.logoPath} alt={partner.name} />
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

const MainLogosContainer = styled.div<{ $oneColumn: boolean | undefined }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$oneColumn ? '1fr' : '1fr 1fr')};
  justify-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
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

const MainLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 300px;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  max-width: 200px;

  & > img {
    height: auto;
  }
`;

export default PartnersSection;
