/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../../../constants/colors';
import DIMS from '../../../../constants/dims';

export default css`
  .person {
    display: flex;
    flex-direction: row;
    margin: ${DIMS.LAYOUT_PADDING * 3}px 0;
  }
  img {
    border: 3px solid ${COLORS.WHITE};
    height: 60px;
    border-radius: 50%;
    width: 60px;
  }
  .details {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-left: ${DIMS.LAYOUT_PADDING}px;
    text-align: left;
  }
  h2 {
    font-size: ${4 / 3}em;
    margin: 0;
  }
  .title {
    color: ${COLORS.WHITE};
    font-size: ${4 / 4}em;
    margin-top: ${DIMS.LAYOUT_PADDING / 2}px;
    opacity: 0.5;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    h2 {
      font-size: ${3 / 2}em;
    }
    .title {
      font-size: ${3 / 3}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    h2 {
      font-size: ${4 / 3}em;
    }
    .title {
      font-size: ${4 / 4}em;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    h2 {
      font-size: ${5 / 4}em;
    }
    .title {
      font-size: ${5 / 5}em;
    }
  }
`;
