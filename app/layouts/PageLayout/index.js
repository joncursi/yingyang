/**
 * @flow
 * @prettier
 */

/* global window */

import * as React from 'react';

import Header from '../../components/Header';
import { initGA, logPageView } from '../../helpers/analytics';

import styles from './styles';

type PropsFlowType = {
  activeRoute: string,
  backgroundImageUrl: string,
  children: React.Node,
};

class PageLayout extends React.Component<PropsFlowType> {
  props: PropsFlowType;

  componentDidMount() {
    /* eslint-disable no-underscore-dangle */
    if (!window.__GA_INITIALIZED__) {
      initGA();
      // eslint-disable-next-line immutable/no-mutation
      window.__GA_INITIALIZED__ = true;
    }
    logPageView();
    /* eslint-enable no-underscore-dangle */
  }

  render(): React.Node {
    const { activeRoute, backgroundImageUrl, children } = this.props;

    return (
      <>
        <style jsx>{styles}</style>

        <Header activeRoute={activeRoute} />

        <div className="container">
          <div className="containerLeft">
            <main>{children}</main>
          </div>

          <div className="containerRight">
            <img alt="Michelle & Jonathan" src={backgroundImageUrl} />
          </div>
        </div>
      </>
    );
  }
}

export default PageLayout;
