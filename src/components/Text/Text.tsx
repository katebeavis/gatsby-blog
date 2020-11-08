import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { theme } from '../../assets/styles/index.style';
import typography from '../../constants/typography';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * @default 'regular'
   */
  weight?: 'thin' | 'extraLight' | 'light' | 'regular' | 'bold' | 'semiBold';
  /**
   * @default 'body'
   */
  size?: string;
  /**
   * @default 'span'
   */
  as?: 'span' | 'p' | 'figcaption';
  /**
   * @default false
   */
  capitalize?: boolean;
  /**
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'right' | 'center';
  /**
   * @default `colors.greyDarkest`
   */
  color?: string;
}

const {
  sizes: { lineHeight: lineHeightMap },
} = typography;

const Text = styled.span<TextProps>`
  margin: 0;
  letter-spacing: 0;
  color: ${({ color = theme.grey }) => color};
  font-size: ${({ size = 'body', capitalize }) =>
    typography.sizes.text[capitalize ? 'small' : size]};
  line-height: ${({ size = 'body' }) => lineHeightMap[size]};
  font-weight: ${({ weight = 'light', capitalize }) =>
    typography.weights[capitalize ? 'bold' : weight]};
  font-family: ${typography.secondary};
  text-align: ${({ align = 'inherit' }) => align};
  text-transform: ${({ capitalize }) => capitalize && 'uppercase'};
  ${({ className = '', as }) =>
    (!as || as === 'span') &&
    className
      .split(' ')
      .some((clss) => /[mp](:[mp])?[tblrxy]?-\d+/.test(clss)) &&
    `
    display: block
  `}
`;

export default Text;
