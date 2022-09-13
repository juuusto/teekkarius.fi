import setLanguage from 'next-translate/setLanguage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import HamburgerButton from './HamburgerButton';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import logo from '../../public/images/T150.svg';
import Image from 'next/image';
import { useCurrentPage } from '../../providers/currentPage';

type Props = {
  navColor: string;
  imageUrl: string;
  setImage: boolean;
};

const NavBar = ({ navColor, imageUrl, setImage }: Props) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const { t } = useTranslation('nav');

  const { currentPage, setPage } = useCurrentPage();

  burgerOpen ? blockScroll() : allowScroll();

  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      allowScroll();
    };
  }, [allowScroll]);

  const toggle = () => setBurgerOpen((v) => !v);
  return (
    <Nav opaque={opaque} navColor={navColor}>
      <Container>
        <Link href="/" passHref>
          <Logo>
            <Image
              src={logo}
              alt="Teekkarius 150 logo"
              height="50px"
              width="50px"
            />
          </Logo>
        </Link>
        <NavMenu
          burgerOpen={burgerOpen}
          navColor={navColor}
          imageUrl={imageUrl}
          setImage={setImage}
        >
          <NavLinks burgerOpen={burgerOpen}>
            <Link href="/" passHref>
              <A
                burgerOpen={burgerOpen}
                mobileOnly
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => {
                  setPage('home');
                }}
              >
                {t('home')}
              </A>
            </Link>
            <Link href="/events" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'events' ? 'active' : ''}
                onClick={() => {
                  setPage('events');
                }}
              >
                {t('events')}
              </A>
            </Link>
            <Link href="/tpv" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'tpv' ? 'active' : ''}
                onClick={() => {
                  setPage('tpv');
                }}
              >
                {t('tpv-title')}
              </A>
            </Link>
            <Link href="/tpj" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'tpj' ? 'active' : ''}
                onClick={() => {
                  setPage('tpj');
                }}
              >
                {'TPJ'}
              </A>
            </Link>
            <Link href="/activities" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'activities' ? 'active' : ''}
                onClick={() => {
                  setPage('activities');
                }}
              >
                {t('activities')}
              </A>
            </Link>
            <Link href="/corporate-relations" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'corporate' ? 'active' : ''}
                onClick={() => {
                  setPage('corporate');
                }}
              >
                {t('corporate')}
              </A>
            </Link>
            <Link href="/contact" passHref>
              <A
                burgerOpen={burgerOpen}
                className={currentPage === 'contact' ? 'active' : ''}
                onClick={() => {
                  setPage('contact');
                }}
              >
                {t('contact')}
              </A>
            </Link>
          </NavLinks>
          <div>
            <LanguageButton
              onClick={async () => {
                await setLanguage('fi');
                setBurgerOpen(false);
              }}
            >
              FI
            </LanguageButton>
            <LanguageButton
              onClick={async () => {
                await setLanguage('en');
                setBurgerOpen(false);
              }}
            >
              EN
            </LanguageButton>
            {/* <LanguageButton onClick={async () => await setLanguage('sv')}>
              SV
            </LanguageButton> */}
          </div>
        </NavMenu>
        <HamburgerButton active={burgerOpen} toggle={toggle} />
      </Container>
    </Nav>
  );
};

const Nav = styled.nav<{
  opaque: boolean;
  navColor: string;
}>`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.polysteekki};
  position: fixed;
  z-index: 20;
  background-color: ${({ theme, opaque, navColor }) =>
    opaque ? theme.colors[navColor] : 'none'};

  transition: background-color 0.3s ease;

  font-family: 'KionaBold';

  a::selection,
  h2::selection,
  button::selection,
  img::selection {
    color: ${({ theme }) => theme.colors.tupsu};
    background: ${({ theme }) => theme.colors.polysteekki};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 1.5em;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 0.5em;
  margin: 0.5em 1em 0.5em 0;
  color: inherit;
`;

const NavMenu = styled.div<{
  burgerOpen: boolean;
  navColor: string;
  imageUrl: string;
  setImage: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ burgerOpen }) => (burgerOpen ? 'column' : 'row')};
  justify-content: ${({ burgerOpen }) =>
    burgerOpen ? 'center' : 'space-between'};
  width: 100%;
  color: inherit;
  transition: color 2s ease;

  @media screen and (max-width: 800px) {
    display: ${({ burgerOpen }) => (burgerOpen ? 'flex' : 'none')};
    inset: 0;
    font-size: 1.5em;
    position: absolute;
    height: ${({ burgerOpen }) => (burgerOpen ? '100vh' : 'auto')};
    color: ${({ theme }) => theme.colors.polysteekki};
    background-color: ${({ theme, navColor }) => theme.colors[navColor]};
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
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

const A = styled.a<{ burgerOpen: boolean; mobileOnly?: boolean }>`
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
    background-color: ${({ theme }) => theme.colors.polysteekki};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.15s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }

  @media screen and (min-width: 801px) {
    display: ${(p) => (p.mobileOnly ? 'none' : 'initial')};
  }

  @media screen and (max-width: 800px) {
    padding: 0.25em 1em 1.25em 1em;
    font-size: 1.25rem;

    display: 'initial';
  }

  @media screen and (min-width: 801px) and (max-width: 1001px) {
    padding: 0.75em 0.5em 1.25em 0.5em;
    font-size: 0.8rem;

    &::after {
      width: calc(100% - 1em);
      left: 0.5em;
    }
  }

  @media screen and (min-width: 1001px) and (max-width: 1250px) {
    padding: 0.75em 0.5em 1.25em 0.5em;
    font-size: 1rem;

    &::after {
      width: calc(100% - 1em);
      left: 0.5em;
    }
  }
`;

const LanguageButton = styled.button`
  border: none;
  background: none;
  color: inherit;
  padding: 0.5em;
  cursor: pointer;
`;

export default NavBar;
