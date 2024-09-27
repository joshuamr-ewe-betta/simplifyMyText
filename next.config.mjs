/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
