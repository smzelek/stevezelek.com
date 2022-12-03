const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

process.env.COMMIT_HASH = commitHash;
dotenv.config();

module.exports = {
  entry:
  {
    main: path.resolve(__dirname, './src/routes.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      "~core": path.resolve(__dirname, '../core'),
      "~frontend": path.resolve(__dirname, './src'),
      "~backend": path.resolve(__dirname, '../backend/src'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/usr/index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/privacy/index.html'),
      filename: 'privacy/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/blog/index.html'),
      filename: 'blog/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/apps/index.html'),
      filename: 'apps/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/apps/tic-metac-toe/index.html'),
      filename: 'apps/tic-metac-toe/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/apps/take-me-apart/index.html'),
      filename: 'apps/take-me-apart/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/blog/why-our-company-needed-web-components/index.html'),
      filename: 'blog/why-our-company-needed-web-components/index.html',
      inject: 'body',
      chunks: ['main'],
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'assets'), to: 'assets' },
      ],
    })
  ],
};
