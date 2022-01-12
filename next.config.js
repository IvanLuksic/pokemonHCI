module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.serebii.net",
      "raw.githubusercontent.com",
      "images.ctfassets.net"
    ],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  }
}
