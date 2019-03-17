/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import type { IconFlowType } from '../../../types';
import Icon from '../../Icon';
import Link from '../../Link';
import ListItem from '../../ListItem';
import COLORS from '../../../constants/colors';

import styles from './styles';

type PropsFlowType = {
  handleCloseMenu: () => void,
  isOpen: boolean,
  mobileNavLinks: Array<{
    icon: IconFlowType,
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
                    {/*
                          primaryTextStyle={coreStyles.listItemPrimaryText}
                        */}
                    <ListItem
                      leftIcon={
                        <Icon
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
