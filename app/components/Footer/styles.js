/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  footer {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .text {
    display: block;
    font-size: 80%;
    margin: ${DIMS.LAYOUT_PADDING}px;
    opacity: 0.5;
    text-align: center;
  }
`;
