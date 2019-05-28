/**
 * @flow
 * @prettier
 */

/* global window */

import * as React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { initGA, logPageView } from '../../helpers/analytics';

import styles from './styles';

type PropsFlowType = {
  activeRoute: string,
  children: React.Node,
  rightContainer?: React.Node,
  rightContainerStyle?: Object,
};

class PageLayout extends React.Component<PropsFlowType> {
  props: PropsFlowType;

  static defaultProps = {
    rightContainer: undefined,
    rightContainerStyle: undefined,
  };

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
    const {
      activeRoute,
      children,
      rightContainer,
      rightContainerStyle,
    } = this.props;

    return (
      <>
        <style jsx>{styles}</style>

        <Header activeRoute={activeRoute} />

        <div className="container">
          <div className="containerLeft">
            <main>{children}</main>

            <Footer />
          </div>

          {rightContainer && (
            <div className="containerRight" style={rightContainerStyle}>
              {rightContainer}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default PageLayout;
