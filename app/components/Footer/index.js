/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const Footer = (): React.Node => (
  <>
    <style jsx>{styles}</style>

    <Divider />

    <footer>
      <Typography variant="overline">
        <span className="text">
          Made with
          <span aria-label="love" role="img">
            {' ❤️ '}
          </span>
          by Michelle & Jon
        </span>
      </Typography>
    </footer>
  </>
);

export default Footer;
