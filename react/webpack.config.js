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
            // 'lodash',
            // 'axios',
          ],
    },

    output: {
        path: DEV ? __dirname + '/static' : '/static',
        filename: DEV ? '[name].js' : '[name].[chunkhash].js',
    },

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
                test: /\.(svg|png|jpg|gif)$/,
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

if (DEV) {
    const Visualizer = require('webpack-visualizer-plugin');
    config.devtool = 'eval-source-map';
    config.plugins.push(
        new Visualizer(),
    );
}

if (!DEV) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin');
    config.plugins.push(
        new CleanWebpackPlugin(['static']),
        new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                }
            }
        }),
        new CompressionWebpackPlugin(), // gzip压缩
    );
}

module.exports = config;