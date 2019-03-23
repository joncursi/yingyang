/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

const Footer = (): React.Node => (
  <footer>
    <style jsx>{styles}</style>

    <h6>
      Made with
      <span aria-label="love" role="img">
        {' ❤️ '}
      </span>
      by Michelle & Jon
    </h6>
  </footer>
);

export default Footer;
