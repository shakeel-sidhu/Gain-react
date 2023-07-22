const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [

        {
            test: /\.(sass|css|scss)$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [
                    require("autoprefixer")()
                  ],
                },
              },
              'sass-loader',
            ]
          },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
