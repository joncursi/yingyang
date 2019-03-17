/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import AppRegistry from 'react-native-web/dist/cjs/exports/AppRegistry';
import DocumentImport, { Head, Main, NextScript } from 'next/document';
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import EvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import flush from 'styled-jsx/server';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Foundation from 'react-native-vector-icons/Fonts/Foundation.ttf';
import htmlescape from 'htmlescape';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import materialColors from 'material-colors';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf';
import SimpleLineIcons from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Zocial from 'react-native-vector-icons/Fonts/Zocial.ttf';

import type { ContextFlowType } from '../types';

// choose which env variables should be available on the client
const { GOOGLE_ANALYTICS_TRACKING_ID_WEB, NODE_ENV } = process.env;
const ENV = {
  GOOGLE_ANALYTICS_TRACKING_ID_WEB,
  NODE_ENV,
};

// Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.
// Disable input, textarea outline because blinking caret is enough.
const normalizeNextElements = `
  body > div:first-child,
  #__next {
    height: 100%;
  }
  input, textarea {
    outline: none;
  }
`;

let index = 0;

type PropsFlowType = {
  url: string,
};

type CtxFlowType = ContextFlowType & {
  renderPage: Function,
};

class Document extends DocumentImport<PropsFlowType> {
  props: PropsFlowType;

  static async getInitialProps(ctx: CtxFlowType): Promise<PropsFlowType> {
    const props = await super.getInitialProps(ctx);

    // build the page
    // eslint-disable-next-line object-curly-newline
    const page = ctx.renderPage();

    // register the app with react-native-web
    AppRegistry.registerComponent('Main', (): Function => Main);

    // build a separate stylesheet for react-native-web universal components
    const { getStyleElement } = AppRegistry.getApplication('Main', {});
    const reactNativeWebStyles = getStyleElement();
    // build a separate stylesheet for styled-jsx styles
    const styledJsxStyles = flush();
    // combine styles
    const styles = [
      props.styles,
      /* eslint-disable react/no-danger, no-plusplus */
      <style
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
        key={index++}
      />,
      /* eslint-enable react/no-danger, no-plusplus */
      ...styledJsxStyles,
      reactNativeWebStyles,
    ];

    // get the current URL being requested
    const url = `https://${ctx.req.headers.host}${ctx.req.url}`;

    // inject the props
    return {
      ...page,
      ...props,
      styles,
      url,
    };
  }

  render(): React.Node {
    const { url } = this.props;

    return (
      <html lang="en">
        <Head>
          {/* General */}
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="content-type" />
          <meta
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
            name="viewport"
          />
          <meta content="YingYang" name="application-name" />
          <meta content="Jon Cursi" name="creator" />
          <meta
            content={
              ENV.NODE_ENV === 'production'
                ? 'index,follow'
                : 'noindex,nofollow'
            }
            name="robots"
          />
          {/* Google */}
          <meta
            content="vpliTwwU3WWzDHUyPAxrNJV8_qsotw03lQwbbm6t3ic"
            name="google-site-verification"
          />
          {/* Icons */}
          <link href="/static/img/favicon.png" rel="shortcut icon" />
          {/* Facebook Open Graph */}
          <meta content="en_US" property="og:locale" />
          <meta content="YingYang" property="og:site_name" />
          <meta content="website" property="og:type" />
          <meta content={url} property="og:url" />
          {/* Twitter Cards */}
          <meta content="US" name="twitter:app:country" />
          <meta content="summary" name="twitter:card" />
          <meta content={url} name="twitter:url" />
          {/* Styles */}
          <link rel="stylesheet" href="/static/css/normalize.css" />
          {/* Icons */}
          <style type="text/css">
            {`
              @font-face {
                src: url(${Entypo});
                font-family: Entypo;
              }
              @font-face {
                src: url(${EvilIcons});
                font-family: EvilIcons;
              }
              @font-face {
                src: url(${Feather});
                font-family: Feather;
              }
              @font-face {
                src: url(${FontAwesome});
                font-family: FontAwesome;
              }
              @font-face {
                src: url(${Foundation});
                font-family: Foundation;
              }
              @font-face {
                src: url(${Ionicons});
                font-family: Ionicons;
              }
              @font-face {
                src: url(${MaterialCommunityIcons});
                font-family: MaterialCommunityIcons;
              }
              @font-face {
                src: url(${MaterialIcons});
                font-family: MaterialIcons;
              }
              @font-face {
                src: url(${Octicons});
                font-family: Octicons;
              }
              @font-face {
                src: url(${SimpleLineIcons});
                font-family: SimpleLineIcons;
              }
              @font-face {
                src: url(${Zocial});
                font-family: Zocial;
              }
            `}
          </style>
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat"
            rel="stylesheet"
          />
          <style jsx global>
            {`
              * {
                font-family: 'Montserrat', sans-serif;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              span,
              div,
              a {
                color: ${materialColors.white};
              }
            `}
          </style>
        </Head>

        <body bgColor={materialColors.black}>
          <Main />

          {/* eslint-disable react/no-danger */}
          <script
            dangerouslySetInnerHTML={{
              __html: `__ENV__ = ${htmlescape(ENV)}`,
            }}
          />
          {/* eslint-enable react/no-danger */}

          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
