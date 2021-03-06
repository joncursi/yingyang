/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../constants/colors';
import DIMS from '../../constants/dims';

export default css`
  .container {
    bottom: 0;
    display: flex;
    flex-direction: column;
  }
  .containerLeft {
    display: flex;
    flex: 1;
    flex-direction: column;
    order: 2;
    overflow-x: hidden;
  }
  main {
    width: 100%;
  }
  .containerRight {
    display: block;
    margin-top: ${DIMS.HEIGHTS.HEADER}px;
    order: 1;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    .container {
      flex-direction: row;
      left: 0;
      position: fixed;
      right: 0;
      top: ${DIMS.HEIGHTS.HEADER}px;
    }
    .containerLeft {
      border-right: 1px solid ${COLORS.BLACK_12};
      order: 1;
    }
    .containerRight {
      display: flex;
      flex: 4;
      margin-top: 0;
      order: 2;
    }
  }
`;
