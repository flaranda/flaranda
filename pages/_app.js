import React, { Fragment } from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Reset } from 'styled-reset';

import { GlobalStyles } from '../components/GlobalStyles';


class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title key="title">Francisco Aranda | Software Engineer</title>
          <meta name="author" content="Francisco Aranda" key="author" />
          <link rel="shortcut icon" href="/assets/favicon.ico" key="favicon" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300,700|Source+Sans+Pro&display=swap" rel="stylesheet" />
        </Head>
        <Reset />
        <GlobalStyles />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default App;
