/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import Typography from '@material-ui/core/Typography';

import Link from '../../Link';

import styles, { activeLinkStyles, linkStyles } from './styles';

type PropsFlowType = {
  isActiveRoute: boolean,
  route: string,
  title: string,
};

const NavItem = ({
  title,
  isActiveRoute,
  route,
}: PropsFlowType): React.Node => (
  <React.Fragment>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    {/* eslint-disable jsx-a11y/click-events-have-key-events */}
    <div className="listItemContainer">
      <style jsx>{styles}</style>

      <Link
        style={{
          ...linkStyles,
          ...(isActiveRoute ? activeLinkStyles : {}),
        }}
        to={route}
      >
        {title && (
          <Typography variant="subtitle1">
            <span className="listItemTitle">{title}</span>
          </Typography>
        )}
      </Link>
    </div>
    {/* eslint-enable jsx-a11y/click-events-have-key-events */}
    {/* eslint-enable jsx-a11y/no-static-element-interactions */}
  </React.Fragment>
);

const enhance = compose(onClickOutside);

export default enhance(NavItem);
