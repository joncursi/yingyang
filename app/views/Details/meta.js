/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description={
      'Our ceremony will be located in the "Enchanted Forest." An indoor reception will follow.'
    }
    imageUrl="/static/img/splashes/details-1.jpg"
    keywords={[
      'attire',
      'ceremony',
      'details',
      'outdoor ceremony',
      'unplugged ceremony',
      'wedding details',
    ]}
    title="Wedding Details | Michelle Lombarski & Jonathan Cursi's Wedding Website"
  />
);

export default Meta;
