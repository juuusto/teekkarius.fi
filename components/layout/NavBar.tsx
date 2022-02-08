import setLanguage from 'next-translate/setLanguage';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const NavBar = () => {
  const { t } = useTranslation('nav');
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo>Teekkarius150</Logo>
      </Link>
      <MobileMenuButton>-</MobileMenuButton>
      <NavMenu>
        <NavLinks>
          <Link href="/events" passHref>
            <A>{t('events')}</A>
          </Link>
          <Link href="/" passHref>
            <A>{t('action')}</A>
          </Link>
          <Link href="/" passHref>
            <A>{t('companies')}</A>
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
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(max(1em, (100vw - 1000px) / 2));
  background: #020202;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 2em;
  font-weight: 900;
  text-decoration: none;
  padding: 0.25em;
  margin: 1em 1em 1em 0;
  color: #fff;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const A = styled.a`
  font-weight: 700;
  font-size: 1.25em;
  text-decoration: none;
  padding: 1em 1.25em;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: #1d1d1d;
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
