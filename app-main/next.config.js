const isLocal = process.env.NODE_ENV === 'development';

module.exports = {
  images: {
    domains: [],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
  // Remove the 'functions' key as it's not valid in Next.js configuration
};
