const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: resolve('src'),

  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [new ForkTsCheckerWebpackPlugin()]
}
