const dev = require('./config-dev.js');
const prod = require('./config-prod.js');

const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const GLOBAL_CONGIFS = {
  production: prod.config,
  development: dev.config,
};
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  output: {
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            sourceMap: true,
          },
        }],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    noInfo: false,
    open: true,
    overlay: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    watchContentBase: true,
    // port: PORT,
    host: '0.0.0.0',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      __CONFIG__: GLOBAL_CONGIFS[environment],
    }),

  ],
};
