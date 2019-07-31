/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import AccountTieIcon from 'mdi-material-ui/AccountTie';
import CellphoneOffIcon from 'mdi-material-ui/CellphoneOff';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Paper from '@material-ui/core/Paper';
import PineTreeIcon from 'mdi-material-ui/PineTree';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles, { globalStyles } from './styles';

const details = [
  {
    Icon: AccountTieIcon,
    id: 'attire',
    primaryText: 'Attire',
    secondaryText: 'Formal',
  },
  {
    Icon: PineTreeIcon,
    id: 'outdoor-ceremony',
    primaryText: 'Outdoor Ceremony',
    secondaryText:
      'Our ceremony will be located in the "Enchanted Forest." An indoor reception will follow.',
  },
  {
    Icon: CellphoneOffIcon,
    id: 'unplugged-ceremony',
    primaryText: 'Unplugged Ceremony',
    secondaryText:
      'We really want to see your faces, not your devices, so please keep your phones off and away until we have officially tied the knot! 🙂',
  },
];
const Page = (): React.Node => (
  <>
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>

    <PageLayout
      activeRoute={ROUTES.DETAILS}
      rightContainer={
        <div className="rightContainer">
          <div className="overlay" />

          <img
            alt="Outdoor Ceremony"
            src="/static/img/splashes/details-1.jpg"
          />
        </div>
      }
    >
      <div className="contentContainer">
        <Paper elevation={0} square>
          {details.map(
            (detail, i): React.Node => {
              const children = (
                <ListItem
                  button={!!detail.link}
                  classes={{ root: 'accommodationsListItemRoot' }}
                  divider={i !== details.length - 1}
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
