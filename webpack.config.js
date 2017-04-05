'use strict';

var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

var packageJson = require('./package.json');
var copyright = [
    'syntodo ' + packageJson.version,
    '(c) https://github.com/dmitrykurmanov',
    'License: MIT (http://www.opensource.org/licenses/mit-license.php)'
].join('\n');

module.exports = function(options) {
    var config = {
        entry: path.join(__dirname, './src/index.js'),
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.vue', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        esModule: true
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin(copyright),
            new HTMLPlugin({
                template: 'src/template.html'
            }),
            new FriendlyErrorsWebpackPlugin()
        ],
        devtool: options.buildType === 'prod' ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            open: true,
            port: 9000
        }
    };

    if (options.buildType === 'prod') {
        config.plugins = config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin()
        ]);
    }

    return config;
};