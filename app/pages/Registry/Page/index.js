/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Amazon from 'mdi-material-ui/Amazon';
import Bullseye from 'mdi-material-ui/Bullseye';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles, { globalStyles } from './styles';

const registries = [
  {
    Icon: Amazon,
    id: 'amazon',
    link: {
      target: '_blank',
      to: 'https://www.amazon.com/wedding/share/michelleandjon',
    },
    primaryText: 'Amazon',
    secondaryText: 'Registry items available online only',
  },
  {
    Icon: Bullseye,
    id: 'target',
    link: {
      target: '_blank',
      to: 'https://www.target.com/gift-registry/gift/michelleandjon',
    },
    primaryText: 'Target',
    secondaryText: 'Registry items available online or in-store',
  },
];

const Page = (): React.Node => (
  <>
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>

    <PageLayout
      activeRoute={ROUTES.REGISTRY}
      rightContainer={
        <div className="rightContainer">
          <div className="overlay" />

          <img
            alt="Registry Coming Soon!"
            src="/static/img/splashes/registry-1.png"
          />
        </div>
      }
    >
      <div className="contentContainer">
        <Divider />

        {registries.map(
          (registry, i): React.Node => {
            const children = (
              <ListItem
                button={!!registry.link}
                classes={{ root: 'registryListItemRoot' }}
                divider={i !== registries.length - 1}
                key={registry.id}
              >
                <ListItemIcon>
                  <registry.Icon />
                </ListItemIcon>

                <ListItemText
                  primary={registry.primaryText}
                  secondary={registry.secondaryText}
                />

                {!!registry.link && (
                  <ListItemIcon>
                    <OpenInNewIcon fontSize="small" />
                  </ListItemIcon>
                )}
              </ListItem>
            );

            if (registry.link) {
              return <Link {...registry.link}>{children}</Link>;
            }

            return children;
          },
        )}
      </div>
    </PageLayout>
  </>
);

export default Page;
