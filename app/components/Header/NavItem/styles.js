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
  height: `calc(100% - ${ACTIVE_BORDER_WIDTH * 1.5}px)`,
  paddingLeft: DIMS.LAYOUT_PADDING,
  paddingRight: DIMS.LAYOUT_PADDING,
  paddingTop: ACTIVE_BORDER_WIDTH,
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
  .listItemTitle {
    color: ${COLORS.BLACK};
    margin-left: 10px;
    user-select: none;
  }
  .profileContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${DIMS.LAYOUT_PADDING / 1.5}px 0;
  }
  .mobile-overlay {
    background-color: rgba(26, 54, 80, 0.1);
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: ${DIMS.HEIGHTS.HEADER}px;
    transition: opacity 0.5s ease, z-index 0.5s ease;
    z-index: 4;
  }
  .mobile-overlay.is-active {
    cursor: pointer;
    opacity: 1;
    pointer-events: all;
  }
`;
