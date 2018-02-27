/* eslint-disable */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const theme = require('./package.json').theme;

const DEV = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        CQUTeam: ['./src/index.js'],
        vendor: [
            'react',
            'react-dom',
            'mobx-react',
            'mobx',
            'react-router',
            'react-router-dom',
            'lodash',
            'axios',
          ],
    },

    output: {
        path: __dirname + '/static',
        filename: DEV ? '[name].js' : '[name].[chunkhash].js',
    },

    devtool: 'eval-source-map',
    devServer: {
        contentBase: './static',
        inline: true
    },

    module: {
    	rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
    		{
    			test: /\.js$/,
    			use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'stage-0', 'react'
                        ],
                        plugins: [
                            'transform-runtime',
                            'transform-decorators-legacy',
                            ['import', { libraryName: 'antd-mobile', style: true }]
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader', options: {modifyVars: theme}
                    }],
                    fallback: 'style-loader'
                }),
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
    	]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            disable: DEV
        }),
        new HtmlWebpackPlugin({
            title: 'CQUTeam',
            template: 'index_template.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: DEV ? 'vendor.js' : 'vendor-[chunkhash].js',
          }),
    ],
}

if (!DEV) {
    config.plugins.push(
        new CleanWebpackPlugin(['static']),
        new UglifyJSPlugin()
    );
}

module.exports = config;