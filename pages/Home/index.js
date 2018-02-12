/* @flow */
/* global $ */

import * as React from 'react';
import Head from 'next/head';
import randomMaterialColor from 'random-material-color';

import AnimatedHeart from '../../components/AnimatedHeart';
import PageLayout from '../../layouts/PageLayout';

import styles from './styles';

let startCount = 1;

type PropsFlowType = {};

type StateFlowType = {
  hearts: Array<{
    color: string,
    id: number,
    right: number,
  }>,
};

class Home extends React.Component<PropsFlowType, StateFlowType> {
  props: PropsFlowType;

  state: StateFlowType = {
    hearts: [],
  };

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

    setInterval(() => {
      this._addHeart();
    }, 500);
  }

  _addHeart() {
    this.state.hearts.push({
      color: randomMaterialColor.getColor(),
      id: startCount += 1,
      right: (Math.random() * (150 - 50)) + 50,
    });

    this.setState(this.state);
  }

  _removeHeart(id: number) {
    const index = this.state.hearts.findIndex((heart): boolean => heart.id === id);

    this.state.hearts.splice(index, 1);

    this.setState(this.state);
  }

  render(): React.Node {
    const {
      hearts,
    } = this.state;

    return (
      <PageLayout>

        <style jsx>{styles}</style>

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

        <div className="container" />

        <div className="contentContainer">

          <h2>She said</h2>

          <h1>Yes!</h1>

        </div>

        {hearts.map((heart): React.Node => (
          <AnimatedHeart
            color={heart.color}
            key={heart.id}
            onComplete={(): void => this._removeHeart(heart.id)}
            style={{
              right: heart.right,
            }}
          />
        ))}

      </PageLayout>
    );
  }
}

export default Home;
