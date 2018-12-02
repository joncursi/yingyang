/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

export default css`
  .container {
    align-items: center;
    background-image: url('/static/img/chalkboard.jpg');
    background-repeat: repeat;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 100vh;
    overflow: hidden;
  }
`;

/*
.lights {
  background-image: url('/static/img/lights.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  position: absolute;
  top: -20px;
  width: 100%;
}

@media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
  .lights {
    top: -50px;
  }
}

@media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
  .lights {
    top: -150px;
  }
}
*/
