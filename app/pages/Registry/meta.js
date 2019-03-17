/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="Wedding registry details coming soon!"
    imageUrl="/static/img/splashes/registry-1.png"
    keywords={['registry', 'wedding registry']}
    title="Wedding Registry"
  />
);

export default Meta;
