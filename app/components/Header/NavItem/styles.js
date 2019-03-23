/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '../../../constants/colors';
import DIMS from '../../../constants/dims';
import { NAV_ITEM_COLOR } from '../styles';

const ACTIVE_BORDER_WIDTH = 3;

export const linkStyles = {
  alignItems: 'center',
  borderBottomColor: COLORS.TRANSPARENT,
  borderBottomStyle: 'solid',
  borderBottomWidth: ACTIVE_BORDER_WIDTH,
  color: NAV_ITEM_COLOR,
  display: 'flex',
  height: '100%',
  paddingLeft: DIMS.LAYOUT_PADDING,
  paddingRight: DIMS.LAYOUT_PADDING,
  paddingTop: ACTIVE_BORDER_WIDTH * 3,
  width: '100%',
};

export const activeLinkStyles = {
  borderBottomColor: COLORS.BLACK,
};

export default css`
  .listItemContainer {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    flex-direction: row;
  }
  .listItemIconContainer {
    display: none;
  }
  .listItemTitle {
    color: ${COLORS.BLACK};
    display: none;
    margin-left: 10px;
    user-select: none;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    .listItemIconContainer {
      display: initial;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    .listItemIconContainer {
      display: none;
    }
    .listItemTitle {
      display: initial;
    }
  }
`;
