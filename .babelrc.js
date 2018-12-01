/**
 * @prettier
 */

/* eslint-disable */

'use strict';

module.exports = {
  env: {
    development: {
      presets: ['next/babel', '@babel/preset-flow'],
    },
    production: {
      presets: ['next/babel', '@babel/preset-flow'],
    },
    staging: {
      presets: ['next/babel', '@babel/preset-flow'],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
        '@babel/preset-flow',
      ],
    },
  },
};
