/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../../constants/colors';
import DIMS from '../../../constants/dims';

export default css`
  img {
    border-bottom: 3px solid ${COLORS.WHITE};
    display: block;
    height: auto;
    width: 100%;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    img {
      border-bottom: none;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
