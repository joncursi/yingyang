/**
 * @flow
 * @prettier
 */

/* global window */

import * as React from 'react';
import Head from 'next/head';

import { initGA, logPageView } from '../../helpers/analytics';

import styles from './styles';

const META_DESCRIPTION =
  "We're getting married on Sept. 29, 2019! Click here for wedding details and information.";

const META_KEYWORDS = [
  'michelle lombarski',
  'jon cursi',
  'wedding',
  'marriage',
  'love',
  'ying',
  'yang',
];

type PropsFlowType = {
  backgroundImageUrl: string,
  children: React.Node,
};

class PageLayout extends React.Component<PropsFlowType> {
  props: PropsFlowType;

  componentDidMount() {
    /* eslint-disable no-underscore-dangle */
    if (!window.__GA_INITIALIZED__) {
      initGA();
      // eslint-disable-next-line immutable/no-mutation
      window.__GA_INITIALIZED__ = true;
    }
    logPageView();
    /* eslint-enable no-underscore-dangle */
  }

  render(): React.Node {
    const { backgroundImageUrl, children } = this.props;

    const imagePath = '/static/img/og_image.jpg';
    const title = 'Michelle & Jonathan | Sept. 29, 2019';

    return (
      <div className="container">
        <style jsx>{styles}</style>

        <Head>
          {/* General */}
          <meta content={META_DESCRIPTION} name="description" />
          <meta content={META_KEYWORDS.toString()} name="keywords" />
          <title itemProp="name" lang="en">
            {title}
          </title>

          {/* Facebook Open Graph */}
          <meta content={META_DESCRIPTION} property="og:description" />
          <meta content={imagePath} property="og:image" />
          <meta content={title} property="og:title" />

          {/* Twitter Cards */}
          <meta content={META_DESCRIPTION} name="twitter:text:description" />
          <meta content={imagePath} name="twitter:image" />
          <meta content={title} property="twitter:text:title" />
        </Head>

        <div className="containerLeft">
          <main>{children}</main>
        </div>

        <div className="containerRight">
          <img alt="Michelle & Jonathan" src={backgroundImageUrl} />
        </div>
      </div>
    );
  }
}

export default PageLayout;
