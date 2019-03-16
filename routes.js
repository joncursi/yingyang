/**
 * @flow
 * @prettier
 */

const nextRoutes = require('next-routes');

const ROUTES = require('./app/constants/routes');

const routes = nextRoutes();

routes.add({
  name: ROUTES.HOME,
  page: 'Home',
  pattern: '/',
});

routes.add({
  name: ROUTES.ACCOMODATIONS,
  page: 'Accomodations',
  pattern: '/accomodations',
});

// eslint-disable-next-line immutable/no-mutation
module.exports = routes;
