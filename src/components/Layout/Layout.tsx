import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Container, HeaderSection, Title, SLink, Main } from './Layout.style';
import { GlobalStyle } from '../../assets/styles/index.style';

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
