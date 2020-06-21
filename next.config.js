module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.png|jpg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["url-loader"],
    });

    return config;
  },
};
