import setLanguage from 'next-translate/setLanguage';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import HamburgerButton from './HamburgerButton';
import { useScrollBlock } from '../../hooks/useScrollBlock';

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const { t } = useTranslation('nav');

  burgerOpen ? blockScroll() : allowScroll();

  const toggle = () => setBurgerOpen((v) => !v);
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo>Teekkarius&nbsp;150</Logo>
      </Link>
      <NavMenu burgerOpen={burgerOpen}>
        <NavLinks burgerOpen={burgerOpen}>
          <Link href="/events" passHref>
            <A burgerOpen={burgerOpen}>{t('events')}</A>
          </Link>
          <Link href="/" passHref>
            <A burgerOpen={burgerOpen}>{t('activities')}</A>
          </Link>
          <Link href="/" passHref>
            <A burgerOpen={burgerOpen}>{t('companies')}</A>
          </Link>
        </NavLinks>
        <div>
          <LanguageButton onClick={async () => await setLanguage('fi')}>
            FI
          </LanguageButton>
          <LanguageButton onClick={async () => await setLanguage('en')}>
            EN
          </LanguageButton>
          <LanguageButton onClick={async () => await setLanguage('sv')}>
            SV
          </LanguageButton>
        </div>
      </NavMenu>
      <HamburgerButton active={burgerOpen} toggle={toggle} />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  background: #020202;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 2em;
  font-weight: 900;
  text-decoration: none;
  padding: 0.25em;
  margin: 0.5em 1em 0.5em 0;
  color: #fff;
`;

const NavMenu = styled.div<{ burgerOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ burgerOpen }) => (burgerOpen ? 'column' : 'row')};
  justify-content: ${({ burgerOpen }) =>
    burgerOpen ? 'center' : 'space-between'};
  width: 100%;
  max-width: 1024px;
  color: #fff;
  transition: color 2s ease;

  @media screen and (max-width: 800px) {
    display: ${({ burgerOpen }) => (burgerOpen ? 'flex' : 'none')};
    inset: 0;
    position: absolute;
    height: ${({ burgerOpen }) => (burgerOpen ? '100vh' : 'auto')};
    color: #000;
    background-color: #fff;
    transform: ${({ burgerOpen }) =>
      burgerOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: color 2s ease;
  }
`;

const NavLinks = styled.div<{ burgerOpen: boolean }>`
  display: flex;
  text-align: center;
  flex-direction: ${({ burgerOpen }) => (burgerOpen ? 'column' : 'row')};
`;

const A = styled.a<{ burgerOpen: boolean }>`
  font-weight: 700;
  font-size: 1.25em;
  text-decoration: none;
  padding: 1em 1.25em;
  color: inherit;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    width: calc(100% - 2.5em);
    position: absolute;
    left: 1.25em;
    bottom: 0.75em;
    background-color: ${({ burgerOpen }) => (burgerOpen ? '#000' : '#fff')};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.15s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const LanguageButton = styled.button`
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
`;

const MobileMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 800px) {
    display: initial;
  }
`;

export default NavBar;
