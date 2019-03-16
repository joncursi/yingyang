/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import Link from '../../Link';
import ListItem from '../../ListItem';
import COLORS from '../../../constants/colors';
import ROUTES from '../../../constants/routes';

import styles from './styles';

type PropsFlowType = {
  activeRoute?: string,
  handleCloseMenu: () => void,
  isOpen: boolean,
};

const MobileMenu = ({
  activeRoute,
  handleCloseMenu,
  isOpen,
}: PropsFlowType): React.Node => {
  const mobileNavLinks = [
    {
      icon: {
        name: 'hotel',
      },
      isActiveRoute: activeRoute === ROUTES.ACCOMODATIONS,
      route: ROUTES.ACCOMODATIONS,
      title: 'Guest Accomodations',
    },
  ];

  return (
    <div>
      <style jsx>{styles}</style>

      <div
        className={`container ${
          isOpen ? 'is-active' : ''
        } ignore-react-onclickoutside`}
      >
        <div className="contentContainer">
          <nav>
            <ul>
              {mobileNavLinks.map(
                (mobileNavLink): React.Node => (
                  <li key={mobileNavLink.route}>
                    <Link to={mobileNavLink.route}>
                      <div
                        className={`mobileNavLink ${
                          mobileNavLink.isActiveRoute ? 'isActiveRoute' : ''
                        }`}
                      >
                        {/*
                          primaryTextStyle={coreStyles.listItemPrimaryText}
                        */}
                        <ListItem
                          leftIcon={
                            <MaterialCommunityIcon
                              {...mobileNavLink.icon}
                              color={COLORS.WHITE}
                              size={20}
                            />
                          }
                          primaryText={mobileNavLink.title}
                          variant="small"
                        />
                      </div>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
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
};

// eslint-disable-next-line immutable/no-mutation
MobileMenu.defaultProps = {
  activeRoute: undefined,
};

export default MobileMenu;
