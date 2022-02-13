import React, { ComponentProps } from 'react';
import styled from 'styled-components';

type PropTypes = {
  active: boolean;
  toggle: Function;
};

const HamburgerButton = ({ active, toggle }: PropTypes) => {
  return (
    <Container onClick={() => toggle()}>
      <Hamburger>
        <Line active={active} />
        <Line active={active} />
        <Line active={active} />
      </Hamburger>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  cursor: pointer;
  padding: 1em;
  z-index: 3;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Hamburger = styled.div`
  display: block;
  height: 26px;
  width: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.span<{ active: boolean }>`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.polysteekki};

  transform-origin: left;

  &:first-child {
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'rotate(0)')};
    transition: transform 0.3s ease;
  }

  &:nth-child(2) {
    opacity: ${({ active }) => (active ? '0' : '1')};
    transition: opacity 0.1s ease;
  }

  &:last-child {
    transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0)')};
    transition: transform 0.3s ease;
  }
`;

export default HamburgerButton;
