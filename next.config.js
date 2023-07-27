/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add a new rule for handling font files
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'file-loader', // You can also use 'file-loader' here if you prefer
            options: {
              limit: 8192, // You can adjust this value based on your needs
              publicPath: '/_next/static/fonts/',
              outputPath: 'static/fonts/',
              name: '[name]-[hash].[ext]',
              esModule: false, // Important for Next.js, keep it as false
            },
          },
        });
    
        return config;
      }
}

module.exports = nextConfig
