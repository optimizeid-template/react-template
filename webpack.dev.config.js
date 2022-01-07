const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');

const devConfig = merge(defaultConfig, {
  mode: 'development',
  entry: {
    template: {
      import: ['@babel/polyfill', './src/index.js'],
      filename: 'template.js',
    },
    mock: {
      import: './mock.js',
      filename: 'mock.js',
    },
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    open: true,
    static: path.join(__dirname, 'html/'),
    port: 3200,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = devConfig;
