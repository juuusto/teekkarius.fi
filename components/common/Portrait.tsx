import React from 'react';
import styled from 'styled-components';
import placeholder from '../../public/images/T150.svg';

type Props = {
  image?: string;
};

const Portrait = ({ image }: Props) => {
  return (
    <Wrapper>
      <img src={image ? image : placeholder.src} alt="Portrait" height="auto" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #333;
  border: 2px solid #eee;
  margin: 2rem auto;
  display: grid;
  align-items: center;
  overflow: hidden;
`;

export default Portrait;
