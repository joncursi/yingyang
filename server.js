/**
 * @prettier
 */

/* eslint-disable promise/prefer-await-to-then, promise/prefer-await-to-callbacks */
/* eslint-plugin-disable flowtype */

const express = require('express');
const nextjs = require('next');
const sm = require('sitemap');

const nextRoutes = require('./routes');
const ROUTES = require('./app/constants/routes');

// Create the express server
const expressApp = express();
// Create the next app
const nextApp = nextjs({
  // Set the `dev` flag in development to enable Hot Module Replacement
  dev: process.env.NODE_ENV === 'development',
  // Custom `pages` location
  dir: './app',
});
// Create the next handle
const nextHandle = nextRoutes.getRequestHandler(nextApp);

// Configure `sitemap.xml`
expressApp.get('/sitemap.xml', (req, res) => {
  const hostname = `https://${req.get('host')}`;
  const sitemap = sm.createSitemap({
    cacheTime: 600000,
    hostname,
  });

  nextRoutes.routes.forEach(route => {
    switch (true) {
      case route.name === ROUTES.HOME: {
        sitemap.add({
          changefreq: 'weekly',
          priority: 1,
          url: route.pattern,
        });
        break;
      }
      case route.name === ROUTES.ACCOMODATIONS: {
        sitemap.add({
          changefreq: 'monthly',
          priority: 0.5,
          url: route.pattern,
        });
        break;
      }
      case route.name === ROUTES.DETAILS: {
        sitemap.add({
          changefreq: 'monthly',
          priority: 0.5,
          url: route.pattern,
        });
        break;
      }
      case route.name === ROUTES.REGISTRY: {
        sitemap.add({
          changefreq: 'monthly',
          priority: 0.5,
          url: route.pattern,
        });
        break;
      }
      default: {
        break;
      }
    }
  });
  sitemap.toXML((err, xml) => {
    if (err) {
      res.status(500).end();
    } else {
      res.setHeader('content-type', 'application/xml');
      res.send(xml);
    }
  });
});

// Configure `robots.txt`
expressApp.get('/robots.txt', (req, res) => {
  const hostname = `https://${req.get('host')}`;
  res.setHeader('content-type', 'text/plain');
  res.send(`User-agent: *
${
  process.env.NODE_ENV === 'production'
    ? `Sitemap: ${hostname}/sitemap.xml`
    : 'Disallow: /'
}
Disallow: /Home
`);
});

// Render a next route
expressApp.get('*', (req, res) => nextHandle(req, res));

nextApp
  .prepare()
  .then(() =>
    expressApp.listen(process.env.PORT, err => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-console
      console.log(`> Serving on http://localhost:${process.env.PORT}`);
    }),
  )
  .catch(error => {
    throw error;
  });
