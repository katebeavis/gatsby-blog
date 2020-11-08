import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { theme, GlobalStyle } from '../../assets/styles/index.style';
import { SMALL } from '../../constants/breakpoints';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Heading from '../Heading/Heading';

const Main = styled.main`
  flex-grow: 1;
  max-width: 776px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: ${SMALL}) {
    padding: 0;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.greyDark};
  font-weight: 700;
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
        <Main className='mt-8'>
          <header className='my-8'>
            <Heading as='h1'>
              <SLink to='/'>{data.site.siteMetadata.title}</SLink>
            </Heading>
          </header>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
