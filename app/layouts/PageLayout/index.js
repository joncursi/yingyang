/**
 * @flow
 * @prettier
 */

/* global window */

import * as React from 'react';
import Head from 'next/head';

import { initGA, logPageView } from '../../helpers/analytics';

import styles from './styles';

const META_DESCRIPTION = 'On February 11th, she said YES! #cakefightproposal';

const META_KEYWORDS = [
  'michelle lombarski',
  'jon cursi',
  'proposal',
  'engagement',
  'wedding',
  'marraige',
  'love',
  'ying',
  'yang',
  'she said yes',
];

type PropsFlowType = {
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
    const { children } = this.props;

    const imagePath = '/static/img/og_image.jpg';
    const title = 'Michelle & Jon | Wedding Website';

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

        <main>{children}</main>
      </div>
    );
  }
}

export default PageLayout;
