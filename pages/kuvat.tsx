import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ReactMarkdown from "react-markdown";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: '/partner_logos/TEK_logo.png',
    },
    {
        original: '/partner_logos/TEK_logo.png',
    },
    {
        original: '/partner_logos/TEK_logo.png',
    },
    {
        original: '/partner_logos/TEK_logo.png',
    },
    {
        original: '/partner_logos/TEK_logo.png',
    },
    {
        original: '/partner_logos/TEK_logo.png',
    },
]


const Tervehdys = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Teekkarius 150" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navColor="portviini" imageUrl="" setImage={false}>
        <Section>
          <Container>
            <ImageGallery items={images} />
          </Container>
        </Section>
      </Layout>
    </>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding-top: 6rem;
  background: rgb(61, 0, 36);
  background: linear-gradient(
    156deg,
    rgba(61, 0, 36, 1) 0%,
    rgba(145, 23, 31, 1) 100%
  );
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.betoni};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  max-width: 800px;
  width: 100%;
  padding: 1.5em;
  margin: 0 1rem;
  margin-bottom: 2rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: "KionaBold";
`;

const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 1rem;

  & > * {
    margin-bottom: 0.7rem;
  }

  & > p {
    margin-bottom: 1.5rem;
  }

  & a {
    color: inherit;
  }
`;

export default Tervehdys;
