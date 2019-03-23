/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../../constants/colors';
import DIMS from '../../../constants/dims';

export const globalStyles = css.global`
  .mobileMenuListItem {
    padding-right: 0 !important;
  }
`;

export default css`
  .container {
    background-color: ${COLORS.WEDDING.DUSTY_ROSE};
    display: none;
    left: 0;
    position: fixed;
    right: 0;
    top: ${DIMS.HEIGHTS.HEADER}px;
    z-index: 5;
  }
  .container.is-active {
    display: block;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
  }
  .mobileNavLink {
    opacity: 0.75;
  }
  .mobileNavLink.isActiveRoute {
    opacity: 1;
  }
  .mobile-overlay {
    background-color: rgba(26, 54, 80, 0.1);
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 0.5s ease, z-index 0.5s ease;
    z-index: 4;
  }
  .mobile-overlay.is-active {
    cursor: pointer;
    opacity: 1;
    pointer-events: all;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    .container.is-active {
      display: none;
    }
    .mobile-overlay.is-active {
      display: none;
    }
  }
`;
