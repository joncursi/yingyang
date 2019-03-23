/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import Icon from '../../../components/Icon';
import ICON_TYPES from '../../../constants/iconTypes';
import ListItem from '../../../components/ListItem';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles from './styles';

const Page = (): React.Node => {
  const imageUrls = [
    // '/static/img/splashes/accomodations-1.jpg',
    '/static/img/splashes/accomodations-2.jpg',
    // '/static/img/splashes/accomodations-3.jpg',
  ];
  const details = [
    {
      icon: {
        name: 'hotel',
        type: ICON_TYPES.MATERIAL_COMMUNITY,
      },
      primaryText: 'Hotel',
    },
    {
      icon: {
        name: 'location-on',
        type: ICON_TYPES.MATERIAL,
      },
      primaryText: 'Location',
    },
    {
      icon: {
        name: 'phone',
        type: ICON_TYPES.MATERIAL,
      },
      primaryText: 'Call',
    },
    {
      icon: {
        name: 'airport-shuttle',
        type: ICON_TYPES.MATERIAL,
      },
      primaryText: 'Transportation',
    },
    {
      icon: {
        name: 'free-breakfast',
        type: ICON_TYPES.MATERIAL,
      },
      primaryText: 'Breakfast',
    },
    {
      icon: {
        name: 'calendar',
        type: ICON_TYPES.MATERIAL_COMMUNITY,
      },
      primaryText: 'Reservations',
    },
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
          {details.map(
            (detail): React.Node => (
              <ListItem
                {...detail}
                leftIcon={<Icon {...detail.icon} />}
                key={detail.primaryText}
              />
            ),
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
