const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: ['/node_modules'],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        exclude: ['/node_modules'],
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
};
