import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { GlobalStyle } from '../../assets/styles/index.style';
import { SMALL } from '../../constants/breakpoints';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Main = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 10px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: ${SMALL}) {
    padding: 0;
  }
`;

const Layout = ({ children }: any) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{data.site.siteMetadata.title}</title>
        <link rel='canonical' href={data.site.siteMetadata.title} />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle theme='light' />
      <Container>
        <Nav />
        <Main className='mt-20'>{children}</Main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
