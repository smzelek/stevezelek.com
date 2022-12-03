const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new NodemonPlugin(),
    ],
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 500,
    },
});
