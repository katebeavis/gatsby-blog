import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { theme, GlobalStyle } from '../../assets/styles/index.style';
import { SMALL } from '../../constants/breakpoints';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Main = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: ${SMALL}) {
    padding: 0;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-size: 4em;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.black};
  &:hover {
    border-bottom: 1px solid ${theme.black};
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
      </Helmet>
      <GlobalStyle theme='light' />
      <Container>
        <Nav />
        <HeaderSection>
          <Title>
            <SLink to='/'>{data.site.siteMetadata.title}</SLink>
          </Title>
        </HeaderSection>
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
