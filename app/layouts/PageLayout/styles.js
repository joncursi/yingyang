/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

export default css`
  .container {
    bottom: 0;
    display: flex;
    flex-direction: row;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
  .containerLeft {
    background-image: url('/static/img/chalkboard.jpg');
    background-repeat: repeat;
    display: flex;
    flex: 1;
    overflow: scroll;
  }
  main {
    width: 100%;
  }
  .containerRight {
    background-size: cover;
    display: flex;
    flex: 3;
  }
`;
