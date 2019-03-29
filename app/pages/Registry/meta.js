/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="Check out our wedding registries on Amazon (online) and Target (online and in-store)!"
    imageUrl="/static/img/splashes/registry-1.png"
    keywords={['amazon', 'registry', 'target', 'wedding registry']}
    title="Wedding Registry | Michelle Lombarski & Jonathan Cursi's Wedding Website"
  />
);

export default Meta;
