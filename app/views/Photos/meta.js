/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="Pictures from our engagement photo shoot!"
    imageUrl="/static/img/photos/flower2.jpg"
    keywords={[
      'engagement',
      'engagement photos',
      'engagement pictures',
      'photos',
      'pictures',
    ]}
    title="Engagement Photos | Michelle Lombarski & Jonathan Cursi's Wedding Website"
  />
);

export default Meta;
