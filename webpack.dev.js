const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const { BuilderDevToolsPlugin } = require("@builder.io/dev-tools/webpack");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: './public',
    hot: true
  },
  plugins: [
    // new BuilderDevToolsPlugin(),
  ]
});
