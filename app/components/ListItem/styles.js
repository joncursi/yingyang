/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import DIMS from '../../constants/dims';

export default css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  .leftContainer {
    width: 35px;
  }
  p {
    margin-bottom: ${DIMS.LAYOUT_PADDING / 2}px;
    margin-top: ${DIMS.LAYOUT_PADDING / 2}px;
  }
`;
