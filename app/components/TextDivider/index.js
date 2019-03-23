/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import styles, { globalStyles } from './styles';

type PropsFlowType = {
  text: string,
};

const TextDivider = ({ text }: PropsFlowType): React.Node => (
  <div className="container">
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>

    <Divider classes={{ root: 'textDividerRoot' }} />

    <Typography variant="overline">
      <span>{text}</span>
    </Typography>

    <Divider classes={{ root: 'textDividerRoot' }} />
  </div>
);

export default TextDivider;
