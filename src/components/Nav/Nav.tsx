import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../assets/styles/index.style';

const NavContainer = styled.nav``;

const NavLink = styled(Link)`
  float: right;
  text-decoration: none;
  font-size: 1.1em;
  color: ${theme.grey};
  font-weight: 300;
  &:hover {
    border-bottom: 1px solid ${theme.grey};
  }
`;

const Nav = () => (
  <NavContainer className='my-4'>
    <NavLink className='mr-4' to='/about/'>
      About
    </NavLink>
    <NavLink className='mr-4' to='/contact/'>
      Contact
    </NavLink>
    <NavLink className='mr-4' to='/garden/'>
      Garden
    </NavLink>
  </NavContainer>
);

export default Nav;
