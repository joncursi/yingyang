/**
 * @prettier
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-plugin-disable filenames, flowtype */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withCSS = require('@zeit/next-css');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('now-env');
}

// eslint-disable-next-line immutable/no-mutation
module.exports = withCSS({
  // environment variables that are made accessible to the client
  env: {
    GOOGLE_ANALYTICS_TRACKING_ID_WEB:
      process.env.GOOGLE_ANALYTICS_TRACKING_ID_WEB,
    // NODE_ENV: process.env.NODE_ENV,
  },
  // disable file-system routing of `pages` directory
  useFileSystemPublicRoutes: false,
  webpack(config) {
    // use the bundle analyzer if `ANALYZE` is enabled
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }

    config.module.rules.push(
      // load images
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: '../static/images/',
              publicPath: '/_next/static/images/',
            },
          },
        ],
      },
      // load fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: '../static/fonts/',
              publicPath: '/_next/static/fonts/',
            },
          },
        ],
      },
    );

    return config;
  },
});
