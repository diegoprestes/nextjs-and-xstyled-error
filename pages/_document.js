import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { getColorModeInitScriptElement } from "@xstyled/styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>{getColorModeInitScriptElement()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
