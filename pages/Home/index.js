/* @flow */
/* global $ */

import * as React from 'react';
import Head from 'next/head';

import PageLayout from '../../layouts/PageLayout';

import styles from './styles';

type PropsFlowType = {};

class Home extends React.Component<PropsFlowType> {
  props: PropsFlowType;

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
      <PageLayout>

        <style jsx>{styles}</style>

        <Head>

          <script
            src="/static/js/zepto.min.js"
          />

          <link
            href="/static/css/vegas.min.css"
            rel="stylesheet"
          />

          <script
            src="/static/js/vegas.min.js"
          />

        </Head>

        <div className="container" />

        <div className="contentContainer">

          <h2>She said</h2>

          <h1>Yes!</h1>

        </div>

      </PageLayout>
    );
  }
}

export default Home;
