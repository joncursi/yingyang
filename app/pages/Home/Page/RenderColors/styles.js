/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../../../constants/dims';

export default css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .color {
    height: 30px;
    border-radius: 50%;
    margin: ${DIMS.LAYOUT_PADDING}px;
    width: 30px;
  }
`;
