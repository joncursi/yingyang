/**
 * @flow
 * @prettier
 */

const nextRoutes = require('next-routes');

const ROUTES = require('./app/constants/routes');

const routes = nextRoutes();

routes.add({
  name: ROUTES.ACCOMMODATIONS,
  page: 'Accommodations',
  pattern: '/accommodations',
});

routes.add({
  name: ROUTES.DETAILS,
  page: 'Details',
  pattern: '/details',
});

routes.add({
  name: ROUTES.HOME,
  page: 'Home',
  pattern: '/',
});

routes.add({
  name: ROUTES.PHOTOS,
  page: 'Photos',
  pattern: '/photos',
});

routes.add({
  name: ROUTES.REGISTRY,
  page: 'Registry',
  pattern: '/registry',
});

// eslint-disable-next-line immutable/no-mutation
module.exports = routes;
