/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .contentContainer {
    padding: ${DIMS.LAYOUT_PADDING}px;
    text-align: center;
  }
  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 2em;
  }
  h2 {
    font-size: ${2 / 3}em;
  }
  h3 {
    font-size: ${2 / 3}em;
  }
  hr {
    margin: ${DIMS.LAYOUT_PADDING * 2}px 0;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: ${3 / 3}em;
    }
    h3 {
      font-size: ${3 / 4}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: ${4 / 3}em;
    }
    h3 {
      font-size: ${4 / 5}em;
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
  }
`;
