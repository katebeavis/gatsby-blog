import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../assets/styles/index.style';

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1em;
  color: ${theme.grey};
  font-weight: 300;
  &:hover {
    border-bottom: 1px solid ${theme.grey};
  }
`;

const Nav = () => (
  <nav className='my-4 flex'>
    <div className='flex-1'>
      <NavLink className='mr-4' to='/'>
        Home
      </NavLink>
    </div>
    <div>
      <NavLink className='mr-4' to='/garden/'>
        Garden
      </NavLink>
      <NavLink className='mr-4' to='/about/'>
        About
      </NavLink>
    </div>
  </nav>
);

export default Nav;
