/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

const RenderColors = (): React.Node => {
  const colors = ['red', 'orange', 'yellow'];

  return (
    <div className="container">
      <style jsx>{styles}</style>

      {colors.map(
        (color): React.Node => (
          <div
            className="color"
            key={color}
            style={{ backgroundColor: color }}
          />
        ),
      )}
    </div>
  );
};

export default RenderColors;
