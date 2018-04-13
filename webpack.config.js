const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: ENV,
  watchOptions: {
    poll: true,
  },

  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/build/`,
    publicPath: __dirname,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: `${__dirname}/node_modules/`,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },

  plugins: ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
    }),
  ] : [],

  stats: {
    colors: true,
  },
};
