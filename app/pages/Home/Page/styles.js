/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../constants/dims';

export default css`
  .contentContainer {
    padding: 0 ${DIMS.LAYOUT_PADDING}px;
    text-align: center;
  }
  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 3em;
    font-weight: 100;
  }
  h2 {
    font-size: ${4 / 3}em;
  }
  h3 {
    font-size: ${3 / 3}em;
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
    h2 {
      font-size: ${3 / 2}em;
    }
    h3 {
      font-size: ${3 / 3}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h1 {
      font-size: 6em;
    }
    h2 {
      font-size: ${4 / 3}em;
    }
    h3 {
      font-size: ${4 / 4}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    h1 {
      font-size: 5em;
    }
    h2 {
      font-size: ${5 / 3}em;
    }
    h3 {
      font-size: ${5 / 6}em;
    }
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
