import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../assets/styles/index.style';

const NavContainer = styled.nav`
  margin-bottom: 2em;
`;

const NavLink = styled(Link)`
  float: right;
  margin-right: 1em;
  text-decoration: none;
  color: ${theme.black};
  &:hover {
    border-bottom: 1px solid ${theme.black};
  }
`;

const Nav = () => (
  <NavContainer>
    <NavLink to='/about/'>About</NavLink>
    <NavLink to='/contact/'>Contact</NavLink>
  </NavContainer>
);

export default Nav;
