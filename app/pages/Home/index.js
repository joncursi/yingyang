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
        <h1>Michelle & Jonathan</h1>

        <h2>September 29, 2019</h2>
      </div>
    </PageLayout>
  </React.Fragment>
);

export default Home;
