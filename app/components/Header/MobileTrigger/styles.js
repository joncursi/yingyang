/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../../constants/colors';
import DIMS from '../../../constants/dims';

export default css`
  .hamburger {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: flex;
    font: inherit;
    height: ${DIMS.HEIGHTS.HEADER}px;
    justify-content: center;
    left: 0;
    margin: 0;
    overflow: visible;
    padding: 0;
    pointer-events: all;
    position: absolute;
    text-transform: none;
    width: ${DIMS.HEIGHTS.HEADER}px;
  }
  .hamburger-box {
    display: inline-block;
    height: 17.33px;
    margin-top: 3px;
    position: relative;
    width: 26px;
  }
  .hamburger-inner {
    display: block;
    margin-top: -2px;
    top: 50%;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: ${COLORS.WEDDING.DARK_BROWN};
    border-radius: 4px;
    height: 3px;
    position: absolute;
    width: 26px;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: ${COLORS.WEDDING.GOLD};
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -7px;
  }
  .hamburger-inner::after {
    bottom: -7px;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    .hamburger {
      display: none;
      pointer-events: none;
    }
  }
`;
