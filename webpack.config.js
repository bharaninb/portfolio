
const path = require('path');

const config = {
  entry: [
    './index.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
      filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;