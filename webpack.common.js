const path = require('path');
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

module.exports = {
  entry:
  {
    main: './src/routes.tsx',
  },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        COMMIT_HASH: JSON.stringify(commitHash),
      },
    }),
    new HtmlWebpackPlugin({
      template: './www/index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './www/blog/index.html',
      filename: 'blog/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './www/apps/index.html',
      filename: 'apps/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './www/apps/tic-metac-toe/index.html',
      filename: 'apps/tic-metac-toe/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './www/apps/take-me-apart/index.html',
      filename: 'apps/take-me-apart/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './www/blog/why-our-company-needed-web-components/index.html',
      filename: 'blog/why-our-company-needed-web-components/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    })
  ],
};
