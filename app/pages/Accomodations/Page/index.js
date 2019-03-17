/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles from './styles';

const Page = (): React.Node => {
  const imageUrls = [
    // '/static/img/splashes/accomodations-1.jpg',
    '/static/img/splashes/accomodations-2.jpg',
    // '/static/img/splashes/accomodations-3.jpg',
  ];

  return (
    <>
      <style jsx>{styles}</style>

      <PageLayout
        activeRoute={ROUTES.ACCOMODATIONS}
        backgroundImageUrl={
          imageUrls[Math.floor(Math.random() * imageUrls.length)]
        }
      >
        <div className="contentContainer">
          <p>Coming soon!</p>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
