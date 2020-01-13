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
  InfoContainer,
  Image,
  Info,
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
        <InfoContainer>
          <Image src="https://avatars3.githubusercontent.com/u/10133018?s=460&v=4" />
          <Info>
            Written by <strong>Kate Beavis</strong> who lives and works in
            London and likes to build stuff. Follow me on
            <strong>
              {" "}
              <a href="https://twitter.com/katebeavis">Twitter</a>
            </strong>
          </Info>
        </InfoContainer>
        {children}
      </Container>
    </>
  )
}
