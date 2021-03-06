var path = require("path");
var webpack = require("webpack");

const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimize: false
    }
});