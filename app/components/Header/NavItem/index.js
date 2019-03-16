/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import compose from 'recompose/compose';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import onClickOutside from 'react-onclickoutside';

import type { IconFlowType } from '../../../types';
import Link from '../../Link';

import styles, { activeLinkStyles, linkStyles } from './styles';

type PropsFlowType = {
  icon: IconFlowType,
  id: string,
  isActiveRoute: boolean,
  route: string,
  title: string,
};

const NavItem = ({
  icon,
  id,
  title,
  isActiveRoute,
  route,
}: PropsFlowType): React.Node => (
  <React.Fragment>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    {/* eslint-disable jsx-a11y/click-events-have-key-events */}
    <div className="listItemContainer">
      <style jsx>{styles}</style>

      {route && (
        <Link
          style={{
            ...linkStyles,
            ...(isActiveRoute ? activeLinkStyles : {}),
          }}
          to={route}
        >
          <>
            {icon && <MaterialCommunityIcon {...icon} size={28} />}

            {title && (
              <span className={`listItemTitle ${id} ${icon ? 'withIcon' : ''}`}>
                {title}
              </span>
            )}
          </>
        </Link>
      )}
    </div>
    {/* eslint-enable jsx-a11y/click-events-have-key-events */}
    {/* eslint-enable jsx-a11y/no-static-element-interactions */}
  </React.Fragment>
);

const enhance = compose(onClickOutside);

export default enhance(NavItem);
