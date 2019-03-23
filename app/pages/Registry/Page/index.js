/**
 * @flow
 * @prettier
 */

/* global document */

import * as React from 'react';
import Amazon from 'mdi-material-ui/Amazon';
import Bullseye from 'mdi-material-ui/Bullseye';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import WalletGiftcard from 'mdi-material-ui/WalletGiftcard';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import globalStyles from './styles';

const registries = [
  {
    Icon: WalletGiftcard,
    id: 'zola',
    link: {
      target: '_blank',
      to:
        'https://hamptoninn3.hilton.com/en/hotels/pennsylvania/hampton-inn-and-suites-philadelphia-media-PHLSPHX/index.html',
    },
    primaryText: 'Zola',
    secondaryText: 'Something here',
  },
  {
    Icon: Amazon,
    id: 'amazon',
    link: {
      target: '_blank',
      to: 'https://www.amazon.com/wedding/share/michelleandjon',
    },
    primaryText: 'Amazon',
    secondaryText: 'Something here',
  },
  {
    Icon: Bullseye,
    id: 'target',
    link: {
      target: '_blank',
      to: 'https://www.target.com/gift-registry/gift/michelleandjon',
    },
    primaryText: 'Target',
    secondaryText: 'Something here',
  },
];

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
        <style global jsx>
          {globalStyles}
        </style>

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
            <Divider />

            {registries.map(
              (registry, i): React.Node => {
                const children = (
                  <ListItem
                    button={!!registry.link}
                    classes={{ root: 'registryListItemRoot' }}
                    divider={i !== registries.length - 1}
                    key={registry.id}
                  >
                    <ListItemIcon>
                      <registry.Icon />
                    </ListItemIcon>

                    <ListItemText
                      primary={registry.primaryText}
                      secondary={registry.secondaryText}
                    />

                    {!!registry.link && (
                      <ListItemIcon>
                        <OpenInNewIcon fontSize="small" />
                      </ListItemIcon>
                    )}
                  </ListItem>
                );

                if (registry.link) {
                  return <Link {...registry.link}>{children}</Link>;
                }

                return children;
              },
            )}
          </div>
        </PageLayout>
      </>
    );
  }
}

export default Page;
