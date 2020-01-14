import React from 'react';

import { NavContainer, NavLink } from './Nav.style';

const Nav = () => (
  <NavContainer>
    <NavLink to='/about/'>About</NavLink>
    <NavLink to='/contact/'>Contact</NavLink>
  </NavContainer>
);

export default Nav;
