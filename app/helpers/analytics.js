/**
 * @flow
 * @prettier
 */

/* global window */

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID_WEB, {
    debug: process.env.NODE_ENV === 'development',
  });
};

export const logPageView = () => {
  const page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export const logEvent = ({
  action = '',
  category = '',
  label = '',
}: {
  action: string,
  category: string,
  label?: string,
}) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
