const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const { DefinePlugin } = require("webpack");

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve('dist'),
        filename: 'server.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            "~core": path.resolve('core'),
            "~frontend": path.resolve('frontend/src'),
            "~backend": path.resolve('backend/src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
};