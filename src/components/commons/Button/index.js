/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  background: transparent;
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.contrastText`)};
`;

/* eslint-disable-next-line import/prefer-default-export */
export const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};

  &:hover,
  &:focus {
    opacity: 0.5;
  };
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
