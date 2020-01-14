import styled from 'styled-components';
import { Link } from 'gatsby';

import { SMALL } from '../../constants/breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 2em;
  @media screen and (min-width: ${SMALL}) {
    padding: 0;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  font-size: 4em;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #222;
  &:hover {
    border-bottom: 1px solid #222;
  }
`;
