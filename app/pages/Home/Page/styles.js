/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../constants/dims';

export default css`
  .contentContainer {
    display: unset;
    padding: 0 ${DIMS.LAYOUT_PADDING}px;
    text-align: center;
  }
  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 3em;
    font-weight: 100;
  }
  img {
    display: block;
    height: auto;
    width: 100%;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    h1 {
      font-size: 5em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h1 {
      font-size: 6em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    h1 {
      font-size: 5em;
    }
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
