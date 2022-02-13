import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <StyledFooter>
      <Container>
        <Link href="/" passHref>
          <A>{t('footer-contact')}</A>
        </Link>
        <Link href={'https://instagram.com/teekkarius150'} passHref>
          <A target={'_blank'} rel={'noreferrer'}>
            Instagram
          </A>
        </Link>
        <Link href={'https://facebook.com/teekkarius150'} passHref>
          <A target={'_blank'} rel={'noreferrer'}>
            Facebook
          </A>
        </Link>
        <Link href={'https://t.me/teekkarius150'} passHref>
          <A target={'_blank'} rel={'noreferrer'}>
            Telegram
          </A>
        </Link>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 300px;
  background: ${({ theme }) => theme.colors.pimiä};
  color: ${({ theme }) => theme.colors.betoni};
  text-align: center;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 3rem;
  max-width: 1024px;
  width: 100%;
  padding: 3rem 1.5rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const A = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-size: 1.5rem;
`;
export default Footer;
