/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

export const globalStyles = css.global`
  .registryListItemRoot {
    padding-right: 0 !important;
  }
`;

export default css`
  a.zola-registry-embed {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
`;
