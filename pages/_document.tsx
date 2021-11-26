import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import ogpImg from "../public/imgs/ogp.png";

const hostUrl = "https://ange-kawaina.vercel.app";
const ogpAbsolutePath = hostUrl + ogpImg;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>非公式ファンサイト アンゲ・カワイーナ</title>
          <meta
            name="description"
            content="にじさんじライバー アンジュカトリーナさんの非公式ファンサイトです。楽しんでいってね！"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:title"
            content="非公式ファンサイト アンゲ・カワイーナ"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={hostUrl} />
          <meta property="og:image" content={ogpAbsolutePath} />
          <meta
            property="og:description"
            content="にじさんじライバー アンジュカトリーナさんの非公式ファンサイトです。楽しんでいってね！"
          />
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
