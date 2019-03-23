/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Link from '../../Link';

import styles, { globalStyles } from './styles';

type PropsFlowType = {
  handleCloseMenu: () => void,
  isOpen: boolean,
  mobileNavLinks: Array<{
    Icon: Function,
    id: string,
    isActiveRoute: boolean,
    route: string,
    title: string,
  }>,
};

const MobileMenu = ({
  handleCloseMenu,
  isOpen,
  mobileNavLinks,
}: PropsFlowType): React.Node => (
  <div>
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>

    <div
      className={`container ${
        isOpen ? 'is-active' : ''
      } ignore-react-onclickoutside`}
    >
      <nav>
        <ul>
          {mobileNavLinks.map(
            (mobileNavLink): React.Node => (
              <li key={mobileNavLink.id}>
                <Link to={mobileNavLink.route}>
                  <div
                    className={`mobileNavLink ${
                      mobileNavLink.isActiveRoute ? 'isActiveRoute' : ''
                    }`}
                  >
                    <ListItem
                      button
                      classes={{ root: 'mobileMenuListItem' }}
                      divider
                    >
                      <ListItemIcon>
                        <mobileNavLink.Icon color="secondary" size={20} />
                      </ListItemIcon>

                      <ListItemText
                        primary={mobileNavLink.title}
                        primaryTypographyProps={{
                          color: 'secondary',
                        }}
                      />

                      <ListItemIcon>
                        <KeyboardArrowRightIcon color="secondary" />
                      </ListItemIcon>
                    </ListItem>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>

    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    {/* eslint-disable jsx-a11y/click-events-have-key-events */}
    <div
      className={`mobile-overlay ${isOpen ? 'is-active' : ''}`}
      onClick={handleCloseMenu}
    />
    {/* eslint-enable jsx-a11y/click-events-have-key-events */}
    {/* eslint-enable jsx-a11y/no-static-element-interactions */}
  </div>
);

export default MobileMenu;
