import React, { useState } from 'react';
import styled from 'styled-components';
import placeholder from '../../public/images/T150.svg';

type Props = {
  image: string;
};

const Portrait = ({ image }: Props) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Wrapper>
      <Img
        src={imageError ? placeholder.src : image}
        onError={() => setImageError(true)}
        alt="Portrait"
        imageError={imageError}
      />
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

const Img = styled.img<{ imageError: boolean }>`
  height: ${(p) => (p.imageError ? 'auto' : '100%')};
  object-fit: cover;
`;

export default Portrait;
