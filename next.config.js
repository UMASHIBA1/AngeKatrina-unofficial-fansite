const path = require("path");
const withImages = require("next-images");

const svgPath = path.resolve(__dirname, "public/start_animation/svgs");

module.exports = withImages({
  exclude: svgPath,
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
};
