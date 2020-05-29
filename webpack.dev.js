const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "www"),
        port: 9000,
        progress: true,
        hot: true
    },
    output: {},
    module: {
        rules: []
    }
});