import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

type PropTypes = {
  children: React.ReactNode;
  navColor: string;
};

const Layout = ({ children, navColor }: PropTypes) => {
  return (
    <StyledContainer>
      <NavBar navColor={navColor} />
      <StyledMain>{children}</StyledMain>
      {/* <Footer /> */}
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
