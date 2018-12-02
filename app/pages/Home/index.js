/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import PageLayout from '../../layouts/PageLayout';
import TextDivider from '../../components/TextDivider';

import RenderColors from './RenderColors';
import RenderParty from './RenderParty';
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

        <TextDivider text="When" />

        <h2>September 29, 2019</h2>

        <TextDivider text="Where" />

        <h2>
          <a
            href="https://theoldmillrosevalley.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            The Old Mill
          </a>
        </h2>

        <h3>9 Old Mill Ln, Rose Valley, PA 19063, USA</h3>

        <TextDivider text="Our Colors" />

        <RenderColors />

        <TextDivider text="Wedding Party" />

        <RenderParty />
      </div>
    </PageLayout>
  </React.Fragment>
);

export default Home;
