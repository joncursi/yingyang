/* eslint-disable import/no-extraneous-dependencies */
/* eslint-plugin-disable filenames, flowtype */

const BabiliPlugin = require('babili-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  // Disable file-system routing of `pages` directory
  useFileSystemPublicRoutes: false,
  webpack(config, { dev }) {
    // use the bundle analyzer if `ANALYZE` is enabled
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    // Remove minifed react aliases for material-ui so production builds work
    /* eslint-disable no-param-reassign */
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
    }
    /* eslint-enable no-param-reassign */

    // replace UglifyJS with Babili
    // see: https://github.com/zeit/next.js/issues/3553
    // eslint-disable-next-line immutable/no-mutation, no-param-reassign
    config.plugins = config.plugins.filter(plugin => (
      plugin.constructor.name !== 'UglifyJsPlugin'
    ));
    if (!dev) {
      config.plugins.push(new BabiliPlugin());
    }

    return config;
  },
};
