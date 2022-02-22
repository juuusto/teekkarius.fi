import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

type PropTypes = {
  children: React.ReactNode;
  navColor: string;
  imageUrl: string;
  setImage: boolean;
};

const Layout = ({ children, navColor, imageUrl, setImage }: PropTypes) => {
  return (
    <StyledContainer>
      <NavBar navColor={navColor} imageUrl={imageUrl} setImage={setImage} />
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
