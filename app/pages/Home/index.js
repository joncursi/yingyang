/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import PageLayout from '../../layouts/PageLayout';

import styles from './styles';

const Home = (): React.Node => (
  <React.Fragment>
    <style jsx>{styles}</style>

    <PageLayout backgroundImageUrl="/static/img/splash-1.jpg">
      <div className="contentContainer">
        <h1>
          Michelle
          <br />
          - & -
          <br />
          Jonathan
        </h1>

        <hr />

        <h2>September 29, 2019</h2>

        <hr />

        <h3>
          <a href="https://theoldmillrosevalley.com/">The Old Mill</a>
        </h3>

        <h3>9 Old Mill Ln, Rose Valley, PA 19063, USA</h3>

        <hr />
      </div>
    </PageLayout>
  </React.Fragment>
);

export default Home;
