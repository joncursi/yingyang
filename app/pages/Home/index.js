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

    <PageLayout>
      <div className="contentContainer">
        <h1>
          Michelle
          <br />
          - & -
          <br />
          Jonathan
        </h1>

        <h2>September 29, 2019</h2>

        <h3>Rose Valley, PA</h3>
      </div>
    </PageLayout>
  </React.Fragment>
);

export default Home;
