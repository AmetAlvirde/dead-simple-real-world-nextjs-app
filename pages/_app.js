/*
 * Initializes the Redux Provider with the store
 */
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { whoAmI } from '../components/Login/actions';
import withReduxStore from '../lib/with-redux-store';
import getPageContext from '../lib/getPageContext';

const loginPageUrl = '/login';

class ExampleApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static redirectToLogin(ctx) {
    const { req, res } = ctx;
    const isServer = typeof window === 'undefined';
    if (isServer) {
      res.writeHead(302, {
        Location: `${loginPageUrl}?next=${req.originalUrl}`
      });
      res.end();
    } else {
      Router.push(`${loginPageUrl}?next=${ctx.asPath}`);
    }
  }

  static async getInitialProps({ Component, ctx }) {
    const { isPublic } = Component;
    const { reduxStore, req } = ctx;
    const isServer = typeof window === 'undefined';
    let user = null;

    if (isServer) {
      const { cookie } = req.headers;
      if (cookie) {
        user = await reduxStore.dispatch(whoAmI(cookie));
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      user = reduxStore.getState().auth.user;
    }

    if (!isPublic && !user) {
      this.redirectToLogin(ctx);
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <title>Nextjs - M-ui - styled components - redux - cookie auth</title>
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Provider store={reduxStore}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withReduxStore(ExampleApp);
