/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../constants/dims';

export default css`
  .contentContainer {
    padding: ${DIMS.LAYOUT_PADDING}px;
  }
  h1 {
    color: ${materialColors.white};
    font-family: Melville, sans-serif;
    font-size: 3em;
    text-align: center;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    h1 {
      font-size: 4em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h1 {
      font-size: 5em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    h1 {
      font-size: 6em;
    }
  }
`;
