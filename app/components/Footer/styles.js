/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .text {
    display: block;
    font-size: 80%;
    margin: ${DIMS.LAYOUT_PADDING}px;
    opacity: 0.5;
    text-align: center;
  }
`;
