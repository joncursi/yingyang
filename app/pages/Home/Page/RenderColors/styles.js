/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../../../constants/dims';

export default css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .color {
    border: 3px solid ${materialColors.white};
    height: 50px;
    border-radius: 50%;
    margin: ${DIMS.LAYOUT_PADDING}px;
    width: 50px;
  }
`;
