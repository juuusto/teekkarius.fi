import React from 'react';
import { FaInstagram, FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import styled from 'styled-components';

const SocialMediaSection = () => {
  return (
    <StyledSocialMediaSection>
      <SocialMediaContainer>
        <SocialMediaIcon
          href={'https://instagram.com/teekkarius150'}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </SocialMediaIcon>
        <SocialMediaIcon
          href={'https://facebook.com/teekkarius150'}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </SocialMediaIcon>
        <SocialMediaIcon
          href={'https://t.me/teekkarius150'}
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </SocialMediaIcon>
      </SocialMediaContainer>
    </StyledSocialMediaSection>
  );
};

const StyledSocialMediaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.portviini};
  width: 100%;
  background: ${({ theme }) => theme.colors.betoni};
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  max-width: 1024px;
  width: 100%;
  padding: 6em 1.5rem;
`;

const SocialMediaIcon = styled.a`
  font-size: 4em;
  color: inherit;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 800px) {
    font-size: 6em;
  }
`;

export default SocialMediaSection;
