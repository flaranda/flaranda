import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NextApp, { Container } from 'next/app';
import Head from 'next/head';
import { Reset } from 'styled-reset';


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
      <Container>
        <Head>
          <title key="title">Francisco Aranda | Software Engineer</title>
          <meta name="author" content="Francisco Aranda" key="author" />
          <link rel="shortcut icon" href="/assets/favicon.ico" key="favicon" />
        </Head>
        <Reset />
        <GlobalStyles />
        <Component {...pageProps} />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              WebFont.load({
                google: {
                  families: ['Merriweather:300,700', 'Source Sans Pro:400'],
                },
              });
            `
          }}
        />
      </Container>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  html {
    visibility: hidden;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;

    &.wf-active {
      visibility: visible;
    }
  }
`;

export default App;
