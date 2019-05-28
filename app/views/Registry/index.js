/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import Meta from './meta';
import Page from './Page';

const Registry = (): React.Node => (
  <>
    <Page />

    <Meta />
  </>
);

export default Registry;
