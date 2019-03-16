/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

type PropsFlowType = {
  leftIcon?: React.Node,
  primaryText?: string,
};

const ListItem = ({ leftIcon, primaryText }: PropsFlowType): React.Node => (
  <>
    <style jsx>{styles}</style>

    <div className="container">
      {leftIcon && <div className="leftContainer">{leftIcon}</div>}

      {primaryText && <p>{primaryText}</p>}
    </div>
  </>
);

// eslint-disable-next-line immutable/no-mutation
ListItem.defaultProps = {
  leftIcon: undefined,
  primaryText: undefined,
};

export default ListItem;
