import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

/* eslint-disable-next-line import/prefer-default-export */
export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
