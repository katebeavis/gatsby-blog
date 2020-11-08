import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../assets/styles/index.style';

import typography from '../../constants/typography';
import { LARGE } from '../../constants/breakpoints';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export interface StyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   */
  as: HeadingTags;
  /**
   * @default `as`
   */
  size?: string;
  /**
   * @default `colors.greyDark`
   */
  weight?: 'thin' | 'extraLight' | 'light' | 'regular' | 'bold' | 'semiBold';
  /**
   * @default `colors.greyDarkest`
   */
  color?: string;
  /**
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'right' | 'center';
}

const {
  sizes: { heading: headingSizes, lineHeight: lineHeightMap },
} = typography;

const letterSpacingMap = {
  display: '-2.86px',
  h1: '-1.25px',
  h2: '-0.85px',
  h3: '-0.45px',
  h4: '-0.25px',
  h5: '-0.02px',
  h6: '-0.01px',
};

const Heading = styled.h1<StyledHeadingProps>`
  ${({ as, size }) => {
    const tag = size || (as === 'span' ? 'h4' : as);
    return css`
      font-size: ${headingSizes[tag]};
      line-height: ${lineHeightMap[tag]};
      letter-spacing: ${letterSpacingMap[tag]};
    `;
  }};
  color: ${({ color = theme.greyDark }) => color};
  display: ${({ as }) => (as === 'span' ? 'block' : undefined)};
  text-align: ${({ align = 'inherit' }) => align};
  font-family: ${({ as }) =>
    as === 'h3' ? typography.secondary : typography.primary};
  font-weight: ${({ weight = 'regular' }) => typography.weights[weight]};

  ${({ className = '' }) =>
    className
      .split(' ')
      .some((clss) => /[mp](:[mp])?[tblrxy]?-\d+/.test(clss)) &&
    `
    display: block
  `}

  ${({ as, size }) =>
    as === 'h1' &&
    size === 'display' &&
    css`
      @media screen and (max-width: ${LARGE}px) {
        font-size: ${headingSizes.h2};
        line-height: ${lineHeightMap.h2};
        letter-spacing: ${letterSpacingMap.h2};
        font-weight: ${typography.weights.bold};
      }
    `}
`;

export default Heading;
