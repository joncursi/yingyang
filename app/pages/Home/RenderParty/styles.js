/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../../constants/dims';

export default css`
  .person {
    display: flex;
    flex-direction: row;
    margin: ${DIMS.LAYOUT_PADDING * 3}px 0;
  }
  img {
    border: 3px solid ${materialColors.white};
    height: 50px;
    border-radius: 50%;
    width: 50px;
  }
  .details {
    padding-left: ${DIMS.LAYOUT_PADDING}px;
    text-align: left;
  }
  .nameContainer {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: ${4 / 3}em;
    margin: 0;
  }
  h3 {
    font-size: ${3 / 3}em;
    margin-top: ${DIMS.LAYOUT_PADDING}px;
    margin-bottom: 0;
  }
  .title {
    background-color: ${materialColors.white};
    border-radius: 3px;
    color: ${materialColors.black};
    display: table;
    font-size: ${3 / 4}em;
    padding: ${DIMS.LAYOUT_PADDING / 2}px;
    text-align: center;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    h2 {
      font-size: ${3 / 2}em;
    }
    h3 {
      font-size: ${3 / 3}em;
    }
    .title {
      font-size: ${4 / 5}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h2 {
      font-size: ${4 / 3}em;
    }
    h3 {
      font-size: ${4 / 4}em;
    }
    .title {
      font-size: ${5 / 6}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    h2 {
      font-size: ${5 / 4}em;
    }
    h3 {
      font-size: ${5 / 6}em;
    }
  }
`;
