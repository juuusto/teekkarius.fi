import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

type PropTypes = {
  children: React.ReactNode;
  active: boolean;
  setFilter: MouseEventHandler;
};

const FilterButton = ({ children, active = false, setFilter }: PropTypes) => {
  return (
    <Button $active={active} onClick={setFilter}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ $active: boolean }>`
  border-radius: 1rem;
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.portviini};
  border: none;
  color: ${({ theme }) => theme.colors.betoni};
  font-weight: bold;
  font-size: 0.8rem;
  margin: 1rem 0.5rem;
  opacity: ${({ $active }) => ($active ? '1' : '0.5')};
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin: 1rem 0.25rem;
  }
`;

export default FilterButton;
