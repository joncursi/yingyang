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
      activeRoute={ROUTES.ACCOMODATIONS}
      backgroundImageUrl="URL_HERE"
    >
      <div className="contentContainer" />
    </PageLayout>
  </>
);

export default Page;
