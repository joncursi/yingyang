/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import COLORS from '../../../../constants/colors';

import styles from './styles';

const RenderColors = (): React.Node => (
  <div className="container">
    <style jsx>{styles}</style>

    {Object.keys(COLORS).map(
      (color): React.Node => (
        <div
          className="color"
          key={color}
          style={
            COLORS[color] === COLORS.GOLD
              ? {
                  background: `radial-gradient(ellipse farthest-corner at right bottom, #472819 0%, #472819 8%, #d99e4c 30%, #a87b32 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #865c25 0%, #e2b566 8%, #9f7c3c 25%, #2c1b14 62.5%, #2c1b14 100%)`,
                }
              : {
                  backgroundColor: COLORS[color],
                }
          }
        />
      ),
    )}
  </div>
);

export default RenderColors;
