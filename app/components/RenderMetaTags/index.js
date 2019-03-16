/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Head from 'next/head';

type PropsFlowType = {|
  description?: string,
  imageUrl?: string,
  keywords?: Array<string>,
  noIndex?: boolean,
  title?: string,
|};

const RenderMetaTags = ({
  description,
  imageUrl,
  keywords,
  noIndex,
  title,
}: PropsFlowType): React.Node => (
  <Head>
    {/* Descriptions */}
    {description && (
      <>
        {/* Search Engines */}
        <meta content={description} name="description" />

        {/* Facebook Open Graph */}
        <meta content={description} property="og:description" />

        {/* Twitter Cards */}
        <meta content={description} name="twitter:text:description" />
      </>
    )}

    {/* Images */}
    {imageUrl && (
      <>
        {/* Facebook Open Graph */}
        <meta content={imageUrl} property="og:image" />

        <meta content={imageUrl} name="twitter:image" />
      </>
    )}

    {/* Keywords */}
    {keywords && (
      <>
        {/* Search Engines */}
        <meta content={['Jon Cursi', keywords].toString()} name="keywords" />
      </>
    )}

    {/* Titles */}
    {title && (
      <>
        {/* Browser Tab, Search Engines */}
        <title itemProp="name" lang="en">
          {title}
        </title>

        {/* Facebook Open Graph */}
        <meta content={title} property="og:title" />

        {/* Twitter Cards */}
        <meta content={title} name="twitter:title" />
      </>
    )}

    {/* Utility Pages */}
    {noIndex && <meta content="noindex,follow" name="robots" />}
  </Head>
);

// eslint-disable-next-line immutable/no-mutation
RenderMetaTags.defaultProps = {
  description: undefined,
  imageUrl: undefined,
  keywords: undefined,
  noIndex: false,
  title: undefined,
};

export default RenderMetaTags;
