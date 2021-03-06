const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, "www"),
        port: 9000,
        progress: true,
    },
    module: {
        rules: []
    }
});