import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

import typography from '../../constants/typography';

export const theme = {
  greyDark: '#363441',
  grey: '#4A545E',
  greyLight: '#D4D7D9',
  greyLighter: '#EFEFEF',
  offWhite: '#EDEDED',
  tagColour: '#1e90ff',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.theme === 'light' ? theme : theme.greyDark};
    font-family: 'Roboto Slab', serif;
    color: ${(props) =>
      props.theme === 'light' ? theme.greyDark : theme.offWhite};
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.greyDark};
  font-weight: 400;
`;

export const Date = styled.time`
  font-family: ${typography.primary};
  font-size: ${typography.sizes.text.body};
  font-weight: ${typography.weights.thin};
  color: ${theme.grey};
`;

export const Tag = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.tagColour};
`;

export const Divider = styled.span`
  margin: 0 0.3125rem;
`;
