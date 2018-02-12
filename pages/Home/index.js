/* @flow */
/* global $ */

import * as React from 'react';
import Head from 'next/head';

type PropsFlowType = {};

class Home extends React.Component<PropsFlowType> {
  componentDidMount() {
    $('body').vegas({ // eslint-disable-line flowtype-errors/show-errors
      animation: 'random',
      animationDuration: 12000,
      color: '#000000',
      delay: 12000,
      overlay: '/static/img/overlays/05.png',
      slides: [
        { src: '/static/img/slide-1.jpg' },
        { src: '/static/img/slide-2.jpg' },
        { src: '/static/img/slide-3.jpg' },
        { src: '/static/img/slide-4.jpg' },
        { src: '/static/img/slide-5.jpg' },
      ],
      transition: [
        'fade2',
        'zoomOut',
        'swirlLeft2',
        'swirlRight',
        'swirlRight2',
        'blur',
        'blur2',
      ],
      transitionDuration: 2000,
    });
  }

  render(): React.Node {
    return (
      <React.Fragment>

        <Head>
          <script
            src="http://zeptojs.com/zepto.min.js"
          />
          <link
            href="/static/css/vegas.min.css"
            rel="stylesheet"
          />
          <script
            src="/static/js/vegas.min.js"
          />
        </Head>

      </React.Fragment>
    );
  }
}

export default Home;

/*

2419
2427
2433
2472

*/
