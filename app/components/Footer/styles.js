/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .divider {
    border-color: rgba(255, 255, 255, 0.35);
  }

  h6 {
    margin: ${DIMS.LAYOUT_PADDING}px;
    opacity: 0.5;
    text-align: center;
  }
`;
