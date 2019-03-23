/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CalendarIcon from 'mdi-material-ui/Calendar';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles, { globalStyles } from './styles';

const details = [
  {
    Icon: LocationCityIcon,
    id: 'hotel',
    link: {
      target: '_blank',
      to:
        'https://hamptoninn3.hilton.com/en/hotels/pennsylvania/hampton-inn-and-suites-philadelphia-media-PHLSPHX/index.html',
    },
    primaryText: 'Hotel',
    secondaryText: 'Hampton Inn & Suites, Media PA',
  },
  {
    Icon: LocationOnIcon,
    id: 'location',
    link: {
      target: '_blank',
      to:
        'https://www.google.com/maps/dir/The+Old+Mill,+Old+Mill+Lane,+Rose+Valley,+PA/300+Beatty+Rd,+Media,+PA+19063/@39.9045488,-75.3906018,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c6e8f883a8748d:0xecf48d12ebe5c483!2m2!1d-75.3883029!2d39.894527!1m5!1m1!1s0x89c6e9ae5641ad11:0xe2fcd1b316ef8f91!2m2!1d-75.3790185!2d39.9138141!3e0',
    },
    primaryText: 'Location',
    secondaryText: '300 S Beatty Road., Media, Pennsylvania, 19063',
  },
  {
    Icon: PhoneIcon,
    id: 'phone',
    link: {
      to: 'tel:+14844438899',
    },
    primaryText: 'Call',
    secondaryText: '(484) 443 - 8899',
  },
  {
    Icon: AirportShuttleIcon,
    id: 'transportation',
    primaryText: 'Transportation',
    secondaryText:
      'A shuttle will be provided to transport you to and from the venue',
  },
  {
    Icon: FreeBreakfastIcon,
    id: 'breakfast',
    primaryText: 'Breakfast',
    secondaryText:
      'Please join us for a complimentary hot breakfast at 9am in the hotel lobby',
  },
  {
    Icon: CalendarIcon,
    id: 'reservations',
    link: {
      target: '_blank',
      to:
        'https://hamptoninn.hilton.com/en/hp/groups/personalized/P/PHLSPHX-LCW-20190928/index.jhtml',
    },
    primaryText: 'Reservations',
    secondaryText:
      'A block of rooms has been reserved for September 28, 2019 - September 30, 2019. The special room rate will be available until September 7th or until the group block is sold-out, whichever comes first.',
  },
];

const Page = (): React.Node => (
  <>
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>

    <PageLayout
      activeRoute={ROUTES.ACCOMODATIONS}
      rightContainer={
        <img
          alt="Hampton Inn & Suites, Media PA"
          src="/static/img/splashes/accomodations-2.jpg"
        />
      }
    >
      <div className="contentContainer">
        <Paper elevation={0} square>
          {details.map(
            (detail): React.Node => {
              const children = (
                <ListItem
                  button={!!detail.link}
                  classes={{ root: 'accomodationsListItemRoot' }}
                  divider
                  key={detail.id}
                >
                  <ListItemIcon>
                    <detail.Icon />
                  </ListItemIcon>

                  <ListItemText
                    primary={detail.primaryText}
                    secondary={detail.secondaryText}
                  />

                  {!!detail.link && (
                    <ListItemIcon>
                      <OpenInNewIcon fontSize="small" />
                    </ListItemIcon>
                  )}
                </ListItem>
              );

              if (detail.link) {
                return <Link {...detail.link}>{children}</Link>;
              }

              return children;
            },
          )}
        </Paper>
      </div>
    </PageLayout>
  </>
);

export default Page;
