/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

export default css`
  .container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-shrink: 0;
    min-height: 100vh;
    overflow: hidden;
  }
  .containerLeft {
    align-items: center;
    background-image: url('/static/img/chalkboard.jpg');
    background-repeat: repeat;
    display: flex;
    flex: 1;
    height: -webkit-fill-available;
    justify-content: center;
  }
  main {
    width: 100%;
  }
  .containerRight {
    background-size: cover;
    display: flex;
    flex: 3;
    height: -webkit-fill-available;
  }
`;
