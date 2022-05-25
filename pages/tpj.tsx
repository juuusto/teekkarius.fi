import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

const TpjPage = () => {
  const theme = useTheme();
  return (
    <Container>
      <CardContainer>
        <CardMiddle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            aliquam! Unde nostrum tenetur perspiciatis distinctio veniam atque
            laboriosam illo, maiores neque id sunt cumque alias harum. Error
            architecto eius quod praesentium laborum nostrum delectus officia
            quae totam. Expedita, delectus saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            aliquam! Unde nostrum tenetur perspiciatis distinctio veniam atque
            laboriosam illo, maiores neque id sunt cumque alias harum. Error
            architecto eius quod praesentium laborum nostrum delectus officia
            quae totam. Expedita, delectus saepe.
          </p>
        </CardMiddle>
      </CardContainer>
      <CardContainer style={{ transform: 'translateY(-50%)' }}>
        <CardBottom>
          <FrontBottom>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              reprehenderit natus? Ipsa sed veritatis quisquam officia explicabo
              fugiat delectus est molestias eveniet facilis! Id ullam dic nam
              tempo est iolo cum ea, voluptatibus fuga quasi sint deserunt ipsam
              alias quia soluta recusandae veniam magnam tenetur et nobis animi!
              Repudiandae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis dolore sequi eveniet vel exercitationem maiores
              nesciunt assumenda fugit nam hic!
            </p>
            <a href="#">Ilmoo ihmeessä</a>
          </FrontBottom>
          <BackBottom>
            <h2>backside</h2>
          </BackBottom>
        </CardBottom>
      </CardContainer>
      <CardContainer style={{ transform: 'translateY(-50%)' }}>
        <CardTop>
          <FrontTop>
            <h1>Kutsu nönnönnöö</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              reprehenderit natus? Ipsa sed veritatis quisquam officia explicabo
              fugiat delectus est molestias eveniet facilis! Id ullam dicta nam
              tempora est incidunt dolorem cumque ea, voluptatibus fuga quasi
              sint deserunt ipsam alias quia soluta recusandae veniam magnam
              tenetur et nobis animi! Repudiandae.
            </p>
          </FrontTop>
          <BackTop>
            <h2>backside</h2>
          </BackTop>
        </CardTop>
      </CardContainer>
    </Container>
  );
};

const upAnim = keyframes`
  0% { transform: rotateX(0deg) }
  100% {transform: rotateX(180deg)}
`;

const downAnim = keyframes`
  0% { transform: rotateX(0deg) }
  100% {transform: rotateX(-180deg)}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 60vw;
  height: 20vh;
  transform-style: preserve-3d;
  transform: translateY(-50%);
`;

const Card = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 80%;
  transform-style: preserve-3d;
  transform-origin: top;
  transition: all 1s ease;
`;

const CardMiddle = styled.div`
  position: absolute;
  padding: 0 2rem;
  z-index: 1;
  background-color: teal;
  width: 100%;
  height: 100%;
`;

const CardTop = styled(Card)`
  z-index: 300;
  animation: ${upAnim} 1s ease forwards;
`;

const FrontTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: teal;
  transform-origin: bottom;
  transform: rotateX(180deg) translateY(100%);
`;

const BackTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: salmon;
  transform-origin: bottom;
  backface-visibility: hidden;
  transform: rotateX(0deg) translateY(0%);
`;

const CardBottom = styled(Card)`
  transform-origin: bottom;
  animation: ${downAnim} 1s 1s ease forwards;
  bottom: 0;
`;

const FrontBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: teal;
  transform-origin: bottom;
  transform: rotateX(180deg) translateY(100%);
`;

const BackBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: salmon;
  transform-origin: bottom;
  backface-visibility: hidden;
  transform: rotateX(0deg) translateY(0%);
`;

export default TpjPage;
