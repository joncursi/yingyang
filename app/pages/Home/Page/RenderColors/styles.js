/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../../constants/dims';

const SWATCH_SIZE = 36;

export default css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .color {
    height: ${SWATCH_SIZE}px;
    border-radius: 50%;
    margin: ${DIMS.LAYOUT_PADDING}px;
    width: ${SWATCH_SIZE}px;
  }
`;
