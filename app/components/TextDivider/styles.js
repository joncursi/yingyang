/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .container {
    display: flex;
    flex-direction: row;
    margin: ${DIMS.LAYOUT_PADDING * 2}px 0;
  }
  hr {
    flex: 1;
  }
  span {
    font-size: 80%;
    font-weight: 900;
    padding: 0 ${DIMS.LAYOUT_PADDING}px;
    text-transform: uppercase;
  }
`;
