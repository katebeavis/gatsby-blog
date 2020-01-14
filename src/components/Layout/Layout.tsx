import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from '../Nav/Nav';
import { Container, HeaderSection, Title, SLink } from './Layout.style';
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
      <GlobalStyle theme='light' />
      <Container>
        <Nav />
        <HeaderSection>
          <Title>
            <SLink to='/'>{data.site.siteMetadata.title}</SLink>
          </Title>
        </HeaderSection>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
