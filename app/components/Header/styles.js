/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

const LOGO_ASPECT_RATIO = 500 / 475;
const LOGO_HEIGHT = DIMS.HEIGHTS.HEADER * 0.5;
const LOGO_WIDTH = LOGO_HEIGHT * LOGO_ASPECT_RATIO;
export const NAV_ITEM_COLOR = 'rgba(0, 0, 0, 0.60)';

export default css`
  .container {
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
  .headerContainer {
    position: relative;
    top: 0;
    width: 100%;
    z-index: 5;
  }
  .sectionsContainer {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    height: ${DIMS.HEIGHTS.HEADER}px;
    justify-content: center;
    margin: 0 auto;
    padding: 0 ${DIMS.LAYOUT_PADDING}px;
  }
  .section {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
  }
  .section.left {
    justify-content: flex-end;
  }
  img.logo {
    height: ${LOGO_HEIGHT}px;
    margin-bottom: 5px;
    width: ${LOGO_WIDTH}px;
  }
  .section.center {
    align-items: center;
    flex: none;
    justify-content: center;
    margin: 0 35px;
  }
  .section.right {
    justify-content: flex-start;
  }
  nav {
    height: 100%;
  }
  ul {
    align-items: center;
    display: flex;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    align-items: center;
    color: ${NAV_ITEM_COLOR};
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    height: 100%;
    position: relative;
  }
  .navItem {
    display: none;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    .navItem {
      display: initial;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    .headerContainer {
      position: static;
    }
  }
`;
