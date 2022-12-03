const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const commitHash = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

process.env.COMMIT_HASH = commitHash;
dotenv.config();

module.exports = {
    entry: path.resolve(__dirname, './src/main.ts'),
    output: {
        path: path.resolve('dist'),
        filename: 'server.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            "~core": path.resolve(__dirname, '../core'),
            "~frontend": path.resolve(__dirname, '../frontend/src'),
            "~backend": path.resolve(__dirname, './src'),
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
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
};