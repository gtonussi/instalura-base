import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

/* eslint-disable-next-line import/prefer-default-export */
export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
    @media screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `);
}
