import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ReactMarkdown from "react-markdown";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {img: '/images/making150/photo_2022-12-01_23-33-22.jpg', title: 'photo_2022-12-01_23-33-22'},
    {img: '/images/making150/photo_2022-12-01_23-34-58.jpg', title: 'photo_2022-12-01_23-34-58'},
    {img: '/images/making150/photo_2022-12-01_23-35-02.jpg', title: 'photo_2022-12-01_23-35-02'},
    {img: '/images/making150/photo_2022-12-01_23-35-07.jpg', title: 'photo_2022-12-01_23-35-07'},
    {img: '/images/making150/photo_2022-12-01_23-35-10.jpg', title: 'photo_2022-12-01_23-35-10'},
    {img: '/images/making150/photo_2022-12-01_23-35-13.jpg', title: 'photo_2022-12-01_23-35-13'},
    {img: '/images/making150/photo_2022-12-01_23-35-16.jpg', title: 'photo_2022-12-01_23-35-16'},
    {img: '/images/making150/photo_2022-12-01_23-35-20.jpg', title: 'photo_2022-12-01_23-35-20'},
    {img: '/images/making150/photo_2022-12-01_23-35-23.jpg', title: 'photo_2022-12-01_23-35-23'},
    {img: '/images/making150/photo_2022-12-01_23-35-26.jpg', title: 'photo_2022-12-01_23-35-26'},
    {img: '/images/making150/photo_2022-12-01_23-35-30.jpg', title: 'photo_2022-12-01_23-35-30'},
    {img: '/images/making150/photo_2022-12-01_23-35-33.jpg', title: 'photo_2022-12-01_23-35-33'},
    {img: '/images/making150/photo_2022-12-01_23-35-38.jpg', title: 'photo_2022-12-01_23-35-38'},
    {img: '/images/making150/photo_2022-12-01_23-35-40.jpg', title: 'photo_2022-12-01_23-35-40'},
    {img: '/images/making150/photo_2022-12-01_23-35-43.jpg', title: 'photo_2022-12-01_23-35-43'},
    {img: '/images/making150/photo_2022-12-01_23-35-47.jpg', title: 'photo_2022-12-01_23-35-47'},
    {img: '/images/making150/photo_2022-12-01_23-35-50.jpg', title: 'photo_2022-12-01_23-35-50'},
    {img: '/images/making150/photo_2022-12-01_23-35-53.jpg', title: 'photo_2022-12-01_23-35-53'},
    {img: '/images/making150/photo_2022-12-01_23-35-55.jpg', title: 'photo_2022-12-01_23-35-55'},
    {img: '/images/making150/photo_2022-12-01_23-35-58.jpg', title: 'photo_2022-12-01_23-35-58'},
    {img: '/images/making150/photo_2022-12-01_23-36-01.jpg', title: 'photo_2022-12-01_23-36-01'},
    {img: '/images/making150/photo_2022-12-01_23-36-04.jpg', title: 'photo_2022-12-01_23-36-04'},
    {img: '/images/making150/photo_2022-12-01_23-36-06.jpg', title: 'photo_2022-12-01_23-36-06'},
    {img: '/images/making150/photo_2022-12-01_23-36-09.jpg', title: 'photo_2022-12-01_23-36-09'},
    {img: '/images/making150/photo_2022-12-01_23-36-12.jpg', title: 'photo_2022-12-01_23-36-12'},
    {img: '/images/making150/photo_2022-12-01_23-36-14.jpg', title: 'photo_2022-12-01_23-36-14'},
    {img: '/images/making150/photo_2022-12-01_23-36-17.jpg', title: 'photo_2022-12-01_23-36-17'},
    {img: '/images/making150/photo_2022-12-01_23-36-20.jpg', title: 'photo_2022-12-01_23-36-20'},
    {img: '/images/making150/photo_2022-12-01_23-36-23.jpg', title: 'photo_2022-12-01_23-36-23'},
    {img: '/images/making150/photo_2022-12-01_23-36-26.jpg', title: 'photo_2022-12-01_23-36-26'},
    {img: '/images/making150/photo_2022-12-01_23-36-29.jpg', title: 'photo_2022-12-01_23-36-29'},
    {img: '/images/making150/photo_2022-12-01_23-36-31.jpg', title: 'photo_2022-12-01_23-36-31'},
    {img: '/images/making150/photo_2022-12-01_23-36-34.jpg', title: 'photo_2022-12-01_23-36-34'},
    {img: '/images/making150/photo_2022-12-01_23-36-36.jpg', title: 'photo_2022-12-01_23-36-36'},
    {img: '/images/making150/photo_2022-12-01_23-36-39.jpg', title: 'photo_2022-12-01_23-36-39'},
    {img: '/images/making150/photo_2022-12-01_23-36-41.jpg', title: 'photo_2022-12-01_23-36-41'},
    {img: '/images/making150/photo_2022-12-01_23-36-44.jpg', title: 'photo_2022-12-01_23-36-44'},
    {img: '/images/making150/photo_2022-12-01_23-36-50.jpg', title: 'photo_2022-12-01_23-36-50'},
    {img: '/images/making150/photo_2022-12-01_23-36-54.jpg', title: 'photo_2022-12-01_23-36-54'},
    {img: '/images/making150/photo_2022-12-01_23-36-57.jpg', title: 'photo_2022-12-01_23-36-57'},
    {img: '/images/making150/photo_2022-12-01_23-36-59.jpg', title: 'photo_2022-12-01_23-36-59'},
    {img: '/images/making150/photo_2022-12-01_23-37-02.jpg', title: 'photo_2022-12-01_23-37-02'},
    {img: '/images/making150/photo_2022-12-01_23-37-05.jpg', title: 'photo_2022-12-01_23-37-05'},
    {img: '/images/making150/photo_2022-12-01_23-37-08.jpg', title: 'photo_2022-12-01_23-37-08'},
    {img: '/images/making150/photo_2022-12-01_23-37-11.jpg', title: 'photo_2022-12-01_23-37-11'},
    {img: '/images/making150/photo_2022-12-01_23-37-14.jpg', title: 'photo_2022-12-01_23-37-14'},
    {img: '/images/making150/photo_2022-12-01_23-37-17.jpg', title: 'photo_2022-12-01_23-37-17'},
    {img: '/images/making150/photo_2022-12-01_23-37-20.jpg', title: 'photo_2022-12-01_23-37-20'},
    {img: '/images/making150/photo_2022-12-01_23-37-25.jpg', title: 'photo_2022-12-01_23-37-25'},
    {img: '/images/making150/photo_2022-12-01_23-37-28.jpg', title: 'photo_2022-12-01_23-37-28'},
    {img: '/images/making150/photo_2022-12-01_23-37-31.jpg', title: 'photo_2022-12-01_23-37-31'},
    {img: '/images/making150/photo_2022-12-01_23-37-34.jpg', title: 'photo_2022-12-01_23-37-34'},
    {img: '/images/making150/photo_2022-12-01_23-37-37.jpg', title: 'photo_2022-12-01_23-37-37'},
    {img: '/images/making150/photo_2022-12-01_23-37-39.jpg', title: 'photo_2022-12-01_23-37-39'},
    {img: '/images/making150/photo_2022-12-01_23-37-45.jpg', title: 'photo_2022-12-01_23-37-45'},
    {img: '/images/making150/photo_2022-12-01_23-38-26.jpg', title: 'photo_2022-12-01_23-38-26'},
    {img: '/images/making150/photo_2022-12-01_23-38-33.jpg', title: 'photo_2022-12-01_23-38-33'},
    {img: '/images/making150/photo_2022-12-01_23-38-36.jpg', title: 'photo_2022-12-01_23-38-36'},
    {img: '/images/making150/photo_2022-12-01_23-38-39.jpg', title: 'photo_2022-12-01_23-38-39'},
    {img: '/images/making150/photo_2022-12-01_23-38-41.jpg', title: 'photo_2022-12-01_23-38-41'},
    {img: '/images/making150/photo_2022-12-01_23-38-44.jpg', title: 'photo_2022-12-01_23-38-44'},
    {img: '/images/making150/photo_2022-12-01_23-38-47.jpg', title: 'photo_2022-12-01_23-38-47'},
    {img: '/images/making150/photo_2022-12-01_23-38-50.jpg', title: 'photo_2022-12-01_23-38-50'},
    {img: '/images/making150/photo_2022-12-01_23-38-56.jpg', title: 'photo_2022-12-01_23-38-56'},
    {img: '/images/making150/photo_2022-12-01_23-38-59.jpg', title: 'photo_2022-12-01_23-38-59'},
    {img: '/images/making150/photo_2022-12-01_23-39-02.jpg', title: 'photo_2022-12-01_23-39-02'},
    {img: '/images/making150/photo_2022-12-01_23-39-04.jpg', title: 'photo_2022-12-01_23-39-04'},
    {img: '/images/making150/photo_2022-12-01_23-39-07.jpg', title: 'photo_2022-12-01_23-39-07'},
    {img: '/images/making150/photo_2022-12-01_23-39-10.jpg', title: 'photo_2022-12-01_23-39-10'},
    {img: '/images/making150/photo_2022-12-01_23-39-13.jpg', title: 'photo_2022-12-01_23-39-13'},
    {img: '/images/making150/photo_2022-12-01_23-39-17.jpg', title: 'photo_2022-12-01_23-39-17'},
    {img: '/images/making150/photo_2022-12-01_23-39-19.jpg', title: 'photo_2022-12-01_23-39-19'},
    {img: '/images/making150/photo_2022-12-01_23-39-25.jpg', title: 'photo_2022-12-01_23-39-25'},
    {img: '/images/making150/photo_2022-12-01_23-39-28.jpg', title: 'photo_2022-12-01_23-39-28'},
    {img: '/images/making150/photo_2022-12-01_23-39-31.jpg', title: 'photo_2022-12-01_23-39-31'},
    {img: '/images/making150/photo_2022-12-01_23-39-35.jpg', title: 'photo_2022-12-01_23-39-35'},
    {img: '/images/making150/photo_2022-12-01_23-39-38.jpg', title: 'photo_2022-12-01_23-39-38'},
    {img: '/images/making150/photo_2022-12-01_23-39-41.jpg', title: 'photo_2022-12-01_23-39-41'},
    {img: '/images/making150/photo_2022-12-01_23-39-45.jpg', title: 'photo_2022-12-01_23-39-45'},
    {img: '/images/making150/photo_2022-12-01_23-39-48.jpg', title: 'photo_2022-12-01_23-39-48'},
    {img: '/images/making150/photo_2022-12-01_23-39-51.jpg', title: 'photo_2022-12-01_23-39-51'},
    {img: '/images/making150/photo_2022-12-01_23-39-54.jpg', title: 'photo_2022-12-01_23-39-54'},
    {img: '/images/making150/photo_2022-12-01_23-39-59.jpg', title: 'photo_2022-12-01_23-39-59'},
    {img: '/images/making150/photo_2022-12-01_23-40-03.jpg', title: 'photo_2022-12-01_23-40-03'},
    {img: '/images/making150/photo_2022-12-01_23-40-06.jpg', title: 'photo_2022-12-01_23-40-06'},
    {img: '/images/making150/photo_2022-12-01_23-40-09.jpg', title: 'photo_2022-12-01_23-40-09'},
    {img: '/images/making150/photo_2022-12-01_23-40-13.jpg', title: 'photo_2022-12-01_23-40-13'},
    {img: '/images/making150/photo_2022-12-01_23-40-16.jpg', title: 'photo_2022-12-01_23-40-16'},
    {img: '/images/making150/photo_2022-12-01_23-40-18.jpg', title: 'photo_2022-12-01_23-40-18'},
    {img: '/images/making150/photo_2022-12-01_23-40-21.jpg', title: 'photo_2022-12-01_23-40-21'},
    {img: '/images/making150/photo_2022-12-01_23-40-23.jpg', title: 'photo_2022-12-01_23-40-23'},
    {img: '/images/making150/photo_2022-12-01_23-40-27.jpg', title: 'photo_2022-12-01_23-40-27'},
    {img: '/images/making150/photo_2022-12-01_23-40-30.jpg', title: 'photo_2022-12-01_23-40-30'},
    {img: '/images/making150/photo_2022-12-01_23-40-32.jpg', title: 'photo_2022-12-01_23-40-32'},
    {img: '/images/making150/photo_2022-12-01_23-40-35.jpg', title: 'photo_2022-12-01_23-40-35'},
    {img: '/images/making150/photo_2022-12-01_23-40-38.jpg', title: 'photo_2022-12-01_23-40-38'},
    {img: '/images/making150/photo_2022-12-01_23-40-41.jpg', title: 'photo_2022-12-01_23-40-41'},
    {img: '/images/making150/photo_2022-12-01_23-40-45.jpg', title: 'photo_2022-12-01_23-40-45'},
    {img: '/images/making150/photo_2022-12-01_23-40-49.jpg', title: 'photo_2022-12-01_23-40-49'},
    {img: '/images/making150/photo_2022-12-01_23-40-52.jpg', title: 'photo_2022-12-01_23-40-52'},
    {img: '/images/making150/photo_2022-12-01_23-40-55.jpg', title: 'photo_2022-12-01_23-40-55'},
    {img: '/images/making150/photo_2022-12-01_23-40-59.jpg', title: 'photo_2022-12-01_23-40-59'},
    {img: '/images/making150/photo_2022-12-01_23-41-02.jpg', title: 'photo_2022-12-01_23-41-02'},
    {img: '/images/making150/photo_2022-12-01_23-41-05.jpg', title: 'photo_2022-12-01_23-41-05'},
    {img: '/images/making150/photo_2022-12-01_23-41-11.jpg', title: 'photo_2022-12-01_23-41-11'},
    {img: '/images/making150/photo_2022-12-01_23-41-16.jpg', title: 'photo_2022-12-01_23-41-16'},
    {img: '/images/making150/photo_2022-12-01_23-41-20.jpg', title: 'photo_2022-12-01_23-41-20'},
    {img: '/images/making150/photo_2022-12-01_23-41-23.jpg', title: 'photo_2022-12-01_23-41-23'},
    {img: '/images/making150/photo_2022-12-01_23-41-26.jpg', title: 'photo_2022-12-01_23-41-26'},
    {img: '/images/making150/photo_2022-12-01_23-41-29.jpg', title: 'photo_2022-12-01_23-41-29'},
    {img: '/images/making150/photo_2022-12-01_23-41-34.jpg', title: 'photo_2022-12-01_23-41-34'},
    {img: '/images/making150/photo_2022-12-01_23-41-37.jpg', title: 'photo_2022-12-01_23-41-37'},
    {img: '/images/making150/photo_2022-12-01_23-41-42.jpg', title: 'photo_2022-12-01_23-41-42'},
    {img: '/images/making150/photo_2022-12-01_23-41-45.jpg', title: 'photo_2022-12-01_23-41-45'},
    {img: '/images/making150/photo_2022-12-01_23-41-48.jpg', title: 'photo_2022-12-01_23-41-48'},
    {img: '/images/making150/photo_2022-12-01_23-41-51.jpg', title: 'photo_2022-12-01_23-41-51'},
    {img: '/images/making150/photo_2022-12-01_23-41-55.jpg', title: 'photo_2022-12-01_23-41-55'},
    {img: '/images/making150/photo_2022-12-01_23-41-58.jpg', title: 'photo_2022-12-01_23-41-58'},
    {img: '/images/making150/photo_2022-12-01_23-42-02.jpg', title: 'photo_2022-12-01_23-42-02'},
    {img: '/images/making150/photo_2022-12-01_23-42-05.jpg', title: 'photo_2022-12-01_23-42-05'},
    {img: '/images/making150/photo_2022-12-01_23-42-08.jpg', title: 'photo_2022-12-01_23-42-08'},
    {img: '/images/making150/photo_2022-12-01_23-42-11.jpg', title: 'photo_2022-12-01_23-42-11'},
    {img: '/images/making150/photo_2022-12-01_23-42-14.jpg', title: 'photo_2022-12-01_23-42-14'},
    {img: '/images/making150/photo_2022-12-01_23-42-17.jpg', title: 'photo_2022-12-01_23-42-17'},
    {img: '/images/making150/photo_2022-12-01_23-42-20.jpg', title: 'photo_2022-12-01_23-42-20'},
    {img: '/images/making150/photo_2022-12-01_23-42-22.jpg', title: 'photo_2022-12-01_23-42-22'},
    {img: '/images/making150/photo_2022-12-01_23-42-25.jpg', title: 'photo_2022-12-01_23-42-25'},
    {img: '/images/making150/photo_2022-12-01_23-42-27.jpg', title: 'photo_2022-12-01_23-42-27'},
    {img: '/images/making150/photo_2022-12-01_23-42-30.jpg', title: 'photo_2022-12-01_23-42-30'},
    {img: '/images/making150/photo_2022-12-01_23-42-32.jpg', title: 'photo_2022-12-01_23-42-32'},
    {img: '/images/making150/photo_2022-12-01_23-42-35.jpg', title: 'photo_2022-12-01_23-42-35'},
    {img: '/images/making150/photo_2022-12-01_23-42-37.jpg', title: 'photo_2022-12-01_23-42-37'},
    {img: '/images/making150/photo_2022-12-01_23-42-40.jpg', title: 'photo_2022-12-01_23-42-40'},
    {img: '/images/making150/photo_2022-12-01_23-42-43.jpg', title: 'photo_2022-12-01_23-42-43'},
    {img: '/images/making150/photo_2022-12-01_23-42-46.jpg', title: 'photo_2022-12-01_23-42-46'},
    {img: '/images/making150/photo_2022-12-01_23-42-49.jpg', title: 'photo_2022-12-01_23-42-49'},
    {img: '/images/making150/photo_2022-12-01_23-42-52.jpg', title: 'photo_2022-12-01_23-42-52'},
    {img: '/images/making150/photo_2022-12-01_23-42-54.jpg', title: 'photo_2022-12-01_23-42-54'},
    {img: '/images/making150/photo_2022-12-01_23-42-58.jpg', title: 'photo_2022-12-01_23-42-58'},
    {img: '/images/making150/photo_2022-12-01_23-43-01.jpg', title: 'photo_2022-12-01_23-43-01'},
    ];

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
            <ContactContainer>
            {itemData.map((item) => (
                <Img key={item.img} src={item.img} alt={item.title} />
            ))}
            </ContactContainer>
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

const Img = styled.img`
  max-height: 400px;
  border-radius: 1rem;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  margin-bottom: 8rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export default Tervehdys;
