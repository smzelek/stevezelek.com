const path = require('path');
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry:
  {
    main: './src/routes.tsx',
  },
  output: {
    path: path.resolve('public'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
      "react": "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        COMMIT_HASH: JSON.stringify(commitHash),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/usr/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/sandbox/index.html',
      filename: 'sandbox/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/privacy/index.html',
      filename: 'privacy/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/blog/index.html',
      filename: 'blog/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/apps/index.html',
      filename: 'apps/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/apps/ticmetactoe/index.html',
      filename: 'apps/ticmetactoe/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/apps/takemeapart/index.html',
      filename: 'apps/takemeapart/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/apps/pokegrader/index.html',
      filename: 'apps/pokegrader/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/apps/guildvaults/index.html',
      filename: 'apps/guildvaults/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/blog/why-our-company-needed-web-components/index.html',
      filename: 'blog/why-our-company-needed-web-components/index.html',
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    })
  ],
};

module.exports = config;
