'use strict';

const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const publicPath = '/';

module.exports = {
  context: path.resolve(__dirname, '..'),
  devtool: 'eval-source-map',
  entry: [
    paths.appIndexJs,
    `webpack-hot-middleware/client?http://localhost:${
      process.env.HTTP_PORT
      }&reload=true`,
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[hash:8].js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules'].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
    alias: {
      // Support React Native Web
      'react-native': 'react-native-web',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
