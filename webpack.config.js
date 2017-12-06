const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [path.join(__dirname, './src/index')],
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
}
