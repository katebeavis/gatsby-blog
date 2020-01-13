import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

import { SMALL } from "../../constants/breakpoints"

export const theme = {
  black: "#222",
  offWhite: "#EDEDED",
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "light" ? theme : theme.black)};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: ${props => (props.theme === "light" ? theme.black : theme.offWhite)};
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 2em;
  @media screen and (min-width: ${SMALL}) {
    padding: 0;
  }
`

export const Nav = styled.div`
  margin-bottom: 2em;
`

export const HeaderSection = styled.div`
  margin-bottom: 2em;
`

export const Title = styled.h1`
  font-size: 4em;
`

export const SLink = styled(Link)`
  text-decoration: none;
  color: #222;
  &:hover {
    border-bottom: 1px solid #222;
  }
`

export const NavLink = styled(Link)`
  float: right;
  margin-right: 1em;
  text-decoration: none;
  color: ${theme.black};
  &:hover {
    border-bottom: 1px solid #222;
  }
`

export const Image = styled.img`
  margin-right: 0.875rem;
  margin-bottom: 0px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`

export const InfoContainer = styled.aside`
  display: flex;
  margin-bottom: 3rem;
`

export const Info = styled.p`
  max-width: 400px;
`
