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

    {Object.keys(COLORS.WEDDING).map(
      (color): React.Node => (
        <div
          className="color"
          key={color}
          style={
            COLORS.WEDDING[color] === COLORS.WEDDING.GOLD
              ? {
                  backgroundImage: 'url(/static/img/bronze.jpeg)',
                  backgroundSize: 'cover',
                }
              : {
                  backgroundColor: COLORS.WEDDING[color],
                }
          }
        />
      ),
    )}
  </div>
);

export default RenderColors;
