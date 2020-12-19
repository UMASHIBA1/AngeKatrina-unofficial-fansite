import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>非公式ファンサイト アンゲ・カワイーナ</title>
          <meta name="description" content="にじさんじライバー アンジュカトリーナさんの非公式ファンサイトです。楽しんでいってね！"/>
          <script src="/load-adobe-fonts.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
