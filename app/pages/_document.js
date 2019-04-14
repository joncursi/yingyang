/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import DocumentImport, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import htmlescape from 'htmlescape';

import type { ContextFlowType } from '../types';
import COLORS from '../constants/colors';

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
  pageContext: Object | null,
  url: string,
};

type CtxFlowType = ContextFlowType & {
  renderPage: Function,
};

class Document extends DocumentImport<PropsFlowType> {
  props: PropsFlowType;

  static async getInitialProps(ctx: CtxFlowType): Promise<PropsFlowType> {
    const props = await super.getInitialProps(ctx);

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    // eslint-disable-next-line object-curly-newline
    const page = ctx.renderPage(
      (Component): any => {
        const WrappedComponent = (componentProps): React.Node => {
          pageContext = componentProps.pageContext;
          return <Component {...componentProps} />;
        };

        /*
        WrappedComponent.propTypes = {
          pageContext: PropTypes.object.isRequired,
        };
        */

        return WrappedComponent;
      },
    );

    let css;
    // It might be undefined, e.g. after an error.
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
    }

    /* eslint-disable react/no-danger, no-plusplus */
    // next styles
    const nextStyles = (
      <style
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
        key={index++}
      />
    );
    // material ui styles
    const materialUiStyles = (
      <style dangerouslySetInnerHTML={{ __html: css }} id="jss-server-side" />
    );
    // build a separate stylesheet for styled-jsx styles
    const styledJsxStyles = flush() || null;
    /* eslint-enable react/no-danger, no-plusplus */

    // combine styles
    const styles = (
      <>
        {props.styles}

        {nextStyles}

        {materialUiStyles}

        {styledJsxStyles}
      </>
    );

    // get the current URL being requested
    const url = `https://${ctx.req.headers.host}${ctx.req.url}`;

    // inject the props
    return {
      ...page,
      ...props,
      pageContext,
      styles,
      url,
    };
  }

  render(): React.Node {
    const { pageContext, url } = this.props;

    return (
      <html lang="en" style={{ height: '100%' }}>
        <Head>
          {/* General */}
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="content-type" />
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            name="viewport"
          />
          <meta
            content="Michelle Lombarski and Jonathan Cursi's Wedding Website"
            name="application-name"
          />
          <meta content="Jon Cursi" name="creator" />
          <meta content="#ffffff" name="theme-color" />
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
          {/* Favicons */}
          <link rel="shortcut icon" href="/static/img/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/static/img/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/static/img/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/static/img/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/static/img/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/static/img/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/static/img/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/static/img/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/static/img/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicons/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicons/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicons/favicon-128.png"
            sizes="128x128"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/static/img/favicons/mstile-144x144.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/static/img/favicons/mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/static/img/favicons/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/static/img/favicons/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/static/img/favicons/mstile-310x310.png"
          />

          {/* Facebook Open Graph */}
          <meta content="en_US" property="og:locale" />
          <meta content="YingYang" property="og:site_name" />
          <meta content="website" property="og:type" />
          <meta content={url} property="og:url" />
          {/* Twitter Cards */}
          <meta content="US" name="twitter:app:country" />
          <meta content="summary" name="twitter:card" />
          <meta content={url} name="twitter:url" />
          {/* Material UI */}
          <meta
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
            name="theme-color"
          />
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
          />
          {/* Styles */}
          <style jsx global>
            {`
              * {
                font-family: 'Roboto', sans-serif;
              }
              #__next {
                height: 100%;
              }
            `}
          </style>
        </Head>

        <body bgColor={COLORS.SCREEN_BACKGROUND} style={{ height: '100%' }}>
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
