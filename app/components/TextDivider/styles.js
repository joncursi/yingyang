/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export const globalStyles = css.global`
  .textDividerRoot {
    flex: 1;
  }
`;

export default css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: ${DIMS.LAYOUT_PADDING * 2}px 0;
    opacity: 0.35;
  }
  span {
    font-size: 80%;
    font-weight: 900;
    padding: 0 ${DIMS.LAYOUT_PADDING}px;
    text-transform: uppercase;
  }
`;
