'use strict';

var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');

var packageJson = require('./package.json');
var copyright = [
    'syntodo ' + packageJson.version,
    '(c) https://github.com/dmitrykurmanov',
    'License: MIT (http://www.opensource.org/licenses/mit-license.php)'
].join('\n');

module.exports = function(options) {
    var config = {
        entry: path.join(__dirname, './src/index.ts'),
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        esModule: true
                    }
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin(copyright),
            new HTMLPlugin({
                template: 'src/template.html'
            })
        ],
        devtool: options.buildType === 'prod' ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 9000,
            open: true
        }
    };

    if (options.buildType === 'prod') {
        config.plugins = config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin()
        ]);
    }

    return config;
};