/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../constants/dims';

export const globalStyles = css.global`
  .registryListItemRoot {
    padding-right: 0 !important;
  }
`;

export default css`
  .rightContainer {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .overlay {
    background-image: url(/static/img/splashes/overlay.png);
    background-repeat: repeat;
    bottom: 0;
    left: 0;
    opacity: 0.25;
    position: absolute;
    right: 0;
    top: 0;
  }
  img {
    display: block;
    height: auto;
    width: 100%;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;
