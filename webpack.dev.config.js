const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');

const devConfig = merge(defaultConfig, {
  mode: 'development',
  output: {
    filename: "template.js",
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'html/'),
    port: 3200,
    publicPath: 'http://localhost:3200/',
    hotOnly: true,
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
