const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  exclude: path.resolve(__dirname, "public/start_animation/svgs"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
