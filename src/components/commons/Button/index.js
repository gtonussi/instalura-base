import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  background: transparent;
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.contrastText`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};

  ${({ ghost }) => ghost ? ButtonGhost : ButtonDefault};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;