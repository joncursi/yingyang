/* eslint-plugin-disable flowtype */

const nextRoutes = require('next-routes');

const ROUTES = require('./constants/routes');

const routes = nextRoutes();

routes.add({
  name: ROUTES.HOME,
  page: 'Home',
  pattern: '/',
});

// eslint-disable-next-line immutable/no-mutation
module.exports = routes;
