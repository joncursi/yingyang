/* @flow */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

export default css`
  .container {
    align-items: center;
    background-color: ${materialColors.purple['500']};
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0.15;
    position: absolute;
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
    padding: 3em;
    position: absolute;
    right: 0;
    top: 0;
  }

  h2 {
    color: white;
    font-size: 2em;
    letter-spacing: -1px;
    margin: 0;
    opacity: 0.25;
    position: relative;
    text-transform: uppercase;
    top: 20px;
  }

  h1 {
    color: white;
    font-size: 6em;
    letter-spacing: -1px;
    margin: 0;
    opacity: 0.5;
    position: relative;
    text-transform: uppercase;
  }
`;
