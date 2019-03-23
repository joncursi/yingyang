/**
 * @flow
 * @prettier
 */

/* global document */

import * as React from 'react';

import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import styles from './styles';

type PropsFlowType = {};

class Page extends React.Component<PropsFlowType> {
  props: PropsFlowType;

  componentDidMount() {
    this._loadZolaPlugin();
  }

  _loadZolaPlugin() {
    if (this.instance && typeof document !== 'undefined') {
      const s = document.createElement('script');

      /* eslint-disable immutable/no-mutation */
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = `!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");`;
      /* eslint-enable immutable/no-mutation */

      this.instance.appendChild(s);
    }
  }

  instance: Function;

  render(): React.Node {
    return (
      <>
        <style jsx>{styles}</style>

        <PageLayout
          activeRoute={ROUTES.REGISTRY}
          rightContainer={
            <a
              className="zola-registry-embed"
              data-registry-key="michelleandjonathan92919"
              href="https://www.zola.com/registry/michelleandjonathan92919"
            >
              Our Zola Wedding Registry
              <div
                ref={el => {
                  // eslint-disable-next-line immutable/no-mutation
                  this.instance = el;
                }}
              />
            </a>
          }
        >
          <div className="contentContainer">
            <p>Work in progress.</p>
          </div>
        </PageLayout>
      </>
    );
  }
}

export default Page;
