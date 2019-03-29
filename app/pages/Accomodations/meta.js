/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="A block of rooms has been reserved for September 28, 2019 - September 30, 2019. The special room rate will be available until September 7th or until the group block is sold-out, whichever comes first."
    imageUrl="/static/img/splashes/accomodations-1.jpg"
    keywords={[
      'accomodations',
      'book room',
      'guest',
      'hampton inn',
      'hotel',
      'hotel block',
      'media pa',
    ]}
    title="Hotel Accomodations | Michelle Lombarski & Jonathan Cursi's Wedding Website"
  />
);

export default Meta;
