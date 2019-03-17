/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles from './styles';

const Page = (): React.Node => (
  <>
    <style jsx>{styles}</style>

    <PageLayout
      activeRoute={ROUTES.REGISTRY}
      backgroundImageUrl="/static/img/splashes/registry-1.png"
    >
      <div className="contentContainer">
        <p>Coming soon!</p>
      </div>
    </PageLayout>
  </>
);

export default Page;
