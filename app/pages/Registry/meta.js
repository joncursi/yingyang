/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="DESC_HERE"
    imageUrl="/static/img/splash-1.jpg"
    keywords={[]}
    title="TITLE_HERE"
  />
);

export default Meta;
