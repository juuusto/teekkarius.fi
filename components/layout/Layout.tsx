import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

type PropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;

export default Layout;
