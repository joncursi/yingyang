/* @flow */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMENSIONS from '../../constants/dimensions';

export default css`
  .container {
    align-items: center;
    background-color: ${materialColors.purple['500']};
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0.15;
    position: fixed;
    right: 0;
    top: 0;
  }

  .contentContainer {
    align-items: flex-start;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 0;
    padding: 1em;
    position: absolute;
    right: 0;
    top: 0;
  }

  h2 {
    color: white;
    font-size: 1.5em;
    letter-spacing: -1px;
    margin: 0;
    opacity: 0.35;
    position: relative;
    text-transform: uppercase;
    top: 15px;
  }

  h1 {
    color: white;
    font-size: 4.5em;
    letter-spacing: -1px;
    margin: 0;
    opacity: 0.75;
    position: relative;
    text-transform: uppercase;
  }

  @media (min-width: ${DIMENSIONS.BREAKPOINTS.SMALL}px) {
    .contentContainer {
      padding: 2em;
    }

    h2 {
      font-size: 1.75em;
      top: 17.5px;
    }

    h1 {
      font-size: 5.25em;
    }
  }

  @media (min-width: ${DIMENSIONS.BREAKPOINTS.MEDIUM}px) {
    .contentContainer {
      padding: 2.5em;
    }

    h2 {
      font-size: 2em;
      top: 20px;
    }

    h1 {
      font-size: 6em;
    }
  }
`;