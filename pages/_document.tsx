import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import ogpImg from "../public/imgs/ogp.png";

const hostUrl = "https://ange-kawaina.umashiba.dev";
const ogpAbsolutePath = hostUrl + ogpImg;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>
            アンジュ・カトリーナ 非公式ファンサイト アンゲ・カワイーナ
          </title>
          <meta
            name="description"
            content="にじさんじライバー アンジュカトリーナさんの非公式ファンサイトです。楽しんでいってね！"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:title"
            content="アンジュ・カトリーナ 非公式ファンサイト アンゲ・カワイーナ"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={hostUrl} />
          <meta property="og:image" content={ogpAbsolutePath} />
          <meta
            property="og:description"
            content="にじさんじライバー アンジュカトリーナさんの非公式ファンサイトです。楽しんでいってね！"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicons/safari-pinned-tab.svg"
            color="#c73b32"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
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
