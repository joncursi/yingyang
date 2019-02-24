/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="Michelle and Jon are getting married on Sept. 29, 2019! Click here for wedding details and more information."
    imageUrl="/static/img/splash-1.jpg"
    keywords={[
      'jon cursi',
      'jonathan cursi',
      'love',
      'marriage',
      'michelle lombarski',
      'website',
      'wedding',
      'yang',
      'ying',
    ]}
    title="Michelle Lombarski & Jonathan Cursi's Wedding | 09.29.19"
  />
);

export default Meta;
