import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  GlobalStyle,
  Container,
  Nav,
  NavLink,
  HeaderSection,
  Title,
  SLink,
} from "./layout.style"

export default ({ children }) => {
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
  )
  return (
    <>
      <GlobalStyle theme="light" />
      <Container>
        <Nav>
          <NavLink to={`/about/`}>About</NavLink>
          <NavLink to={`/contact/`}>Contact</NavLink>
        </Nav>
        <HeaderSection>
          <Title>
            <SLink to={`/`}>{data.site.siteMetadata.title}</SLink>
          </Title>
        </HeaderSection>

        {children}
      </Container>
    </>
  )
}
