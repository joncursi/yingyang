/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../constants/dims';

export default css`
  img {
    display: block;
    height: auto;
    width: 100%;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
