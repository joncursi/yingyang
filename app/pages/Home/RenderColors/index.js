/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import COLORS from '../../../constants/colors';

import styles from './styles';

const RenderColors = (): React.Node => (
  <div className="container">
    <style jsx>{styles}</style>

    {Object.keys(COLORS).map(
      (color): React.Node => (
        <div
          className="color"
          key={color}
          style={{ backgroundColor: COLORS[color] }}
        />
      ),
    )}
  </div>
);

export default RenderColors;
