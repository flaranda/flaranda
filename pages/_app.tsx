import React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '../styles/global.scss'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title key="title">Francisco Aranda | Software Engineer</title>
          <meta name="author" content="Francisco Aranda" key="author" />
          <link rel="shortcut icon" href="/assets/favicon.ico" key="favicon" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300,700|Source+Sans+Pro&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
