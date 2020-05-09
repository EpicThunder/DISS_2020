const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
dotenv.config();

module.exports = merge(common, {

    entry: {
        app: './src/main.ts',
        vendors: ['phaser']
    },

    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../Framework/public/dist')
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'assets', '**', '*'),
            to: path.resolve(__dirname, '../Framework/public/dist')
        }]),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            'FRAMEWORK_URL': JSON.stringify('..'),
            'DEBUG': JSON.stringify(false)
        }),
    ],
});