import { useState } from 'react';
import kutsu from '../public/images/kutsu.jpg';
import sinetti from '../public/images/sinetti.png';
import styled, { css, keyframes, useTheme } from 'styled-components';

const Kutsu = () => {
  const theme = useTheme();
  const [trigger, setTrigger] = useState(false);
  return (
    <Container trigger={trigger}>
      <CardContainer trigger={trigger}>
        <CardTop trigger={trigger}>
          <FrontTop>
            <H2>Kutsu 150. Teekkariperinnejuhlaan</H2>
            <p>
              Teekkarius täyttää tänä vuonna huikeat 150 vuotta, jonka johdosta
              haluaisimme kutsua Teidät juhlistamaan tätä ainutlaatuista
              tapahtumaa kanssamme.
              <br />
              <br />
              Teekkariperinnejuhlaa vietetään lauantaina 19.11.2022 Helsingin
              Jäähallilla, osoitteessa Nordenskiöldinkatu 11-13.
            </p>
          </FrontTop>
          <BackTop>
            <StyledImg src={kutsu.src} alt="" />
            <Button onClick={() => setTrigger(true)}>
              <img
                src={sinetti.src}
                alt="Sinetti"
                style={{ transform: 'scale(1.6) translate(3px, 2px)' }}
              />
            </Button>
          </BackTop>
        </CardTop>
      </CardContainer>
      <CardContainer trigger={trigger}>
        <CardMiddle>
          <p>
            Juhlan hinta on AYY:n jäsenille ja opiskelijoille 100 € ja
            valmistuneille 150 €. Silliaamiaisen hinta on jäsenille 25 € ja
            valmistuneille 30 €.
            <br />
            <br />
            Pukukoodina tässä juhlassa on juhlapuku akateemisin kunniamerkein.
            Ilmoittautuminen aukeaa 22.6. klo 15.00 osoitteessa{' '}
            <a
              href="https://kide.app/TPJ150"
              target="_blank"
              rel="noreferrer noopener"
            >
              kide.app/TPJ150
            </a>
          </p>
        </CardMiddle>
      </CardContainer>
      <CardContainer trigger={trigger}>
        <CardBottom trigger={trigger}>
          <FrontBottom>
            <p>
              Vuosijuhlia innolla odottaen ja Teekkarius 150
              vuosijuhlatoimikuntien puolesta,
            </p>
            <div
              style={{ width: '100%', display: 'grid', justifyItems: 'center' }}
            >
              <img
                style={{ height: '5rem' }}
                src="/images/milja_allekirjoitus.png"
                alt=""
              />
            </div>
            <p>
              Milja Koskela <br />
              Vuosijuhlatirehtööri
            </p>
          </FrontBottom>
          <BackBottom>
            <StyledImg src={kutsu.src} alt="" />
          </BackBottom>
        </CardBottom>
      </CardContainer>
    </Container>
  );
};

const speed = 1;

const upAnim = keyframes`
  0% { transform: rotateX(0.1deg) }
  100% {transform: rotateX(180deg)}
`;

const downAnim = keyframes`
  0% { transform: rotateX(0deg) }
  100% {transform: rotateX(-180deg)}
`;

const cardDown = keyframes`
  0% { transform: translateY(0%) }
  100% { transform: translateY(80%) }
`;

const hehku = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const Container = styled.div<{ trigger: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: 0 1rem;
  transform-style: preserve-3d;
  min-height: ${(p) => (p.trigger ? '54rem' : '20rem')};
  transition: all 0.5s linear;
  color: ${(p) => p.theme.colors.betoni};
  text-align: center;

  & a {
    color: inherit;
  }

  @media screen and (max-width: 800px) {
    min-height: ${(p) => (p.trigger ? '44rem' : '20rem')};
  }

  & p {
    font-size: clamp(1.3rem, 2vw, 1.5rem);

    @media screen and (max-width: 800px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background: #dba62a;
  position: absolute;
  border: none;
  outline: none;
  padding: 0;

  border-radius: 50%;
  cursor: pointer;
  z-index: 800;
  bottom: 0;
  transform: translate(-50%, 50%);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 0 25px 0px white;
    animation: ${hehku} 0.7s infinite linear alternate;
  }

  @media screen and (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

const CardContainer = styled.div<{ trigger: boolean }>`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 20rem;
  transform-style: preserve-3d;
  transform: translateY(0%);
  animation: ${(p) =>
    p.trigger
      ? css`
          ${cardDown} ${speed * 0.5}s ease forwards
        `
      : 'none'};

  @media screen and (max-width: 800px) {
    height: 16rem;
  }
`;

const Card = styled.div<{ trigger: boolean }>`
  position: absolute;
  pointer-events: initial;
  z-index: 1;
  width: 100%;
  height: 80%;
  transform-style: preserve-3d;
  transform-origin: top;
  transition: all ${speed}s ease;
`;

const CardMiddle = styled.div`
  position: absolute;
  pointer-events: initial;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  z-index: -1;
  background: url('/images/lakkitausta.jpg');
  background-position-y: 17.3%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    background-position-y: 13.3%;
  }
`;

const CardTop = styled(Card)`
  z-index: 300;
  transform: rotateX(0.1deg);
  animation: ${(p) =>
    p.trigger
      ? css`
          ${upAnim} ${speed}s ${speed * 0.2}s ease forwards
        `
      : 'none'};
`;

const FrontTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: url('/images/lakkitausta.jpg');
  transform-origin: bottom;
  transform: rotateX(180deg) translateY(100%);
  & h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const BackTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  backface-visibility: hidden;
  text-align: center;
  box-shadow: 0 8px 8px -8px rgba(255, 255, 255, 0.2);
  transform: rotateX(0deg) translateY(0%);
`;

const CardBottom = styled(Card)`
  transform-origin: bottom;
  animation: ${(p) =>
    p.trigger
      ? css`
          ${downAnim} ${speed}s ${0.6 * speed}s ease forwards
        `
      : 'none'};
  bottom: 0;
`;

const FrontBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: url('/images/lakkitausta.jpg');
  background-position-y: 37%;
  transform-origin: bottom;
  transform: rotateX(180deg) translateY(100%);

  @media screen and (max-width: 800px) {
    background-position-y: 29%;
  }
`;

const BackBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  backface-visibility: hidden;
  overflow: hidden;
  transform: rotateX(0deg) translateY(0%);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Kutsu;
