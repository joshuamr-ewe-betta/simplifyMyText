import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });

    // Fix path resolution for amplify_outputs.json
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    // Handle AWS SDK modules properly
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@aws-sdk': '@aws-sdk',
        '@smithy': '@smithy',
        '@aws-crypto': '@aws-crypto',
      });
    }

    return config;
  },
};

export default nextConfig;
