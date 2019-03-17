/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../constants/dims';

export default css`
  .container {
    bottom: 0;
    display: flex;
    flex-direction: column;
  }
  .containerLeft {
    background-image: url('/static/img/chalkboard.jpg');
    background-repeat: repeat;
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
    order: 1;
  }
  img {
    border-bottom: 3px solid ${materialColors.white};
    display: block;
    height: auto;
    width: 100%;
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
      order: 1;
    }
    .containerRight {
      display: flex;
      flex: 3;
      order: 2;
    }
    img {
      border-bottom: none;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
