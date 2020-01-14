import styled from "styled-components"
import { Link } from "gatsby"

import { theme } from "../../assets/styles/index.style"

export const NavContainer = styled.div`
  margin-bottom: 2em;
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
