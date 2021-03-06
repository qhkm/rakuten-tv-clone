const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    devServer: {
        contentBase: './build',
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
    },
    target: 'web',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()], // replacement for uglify-js
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // {
            //   test: /\.tsx?$/,
            //   use: 'ts-loader',
            //   exclude: /node_modules/,
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            appMountId: 'root',
            title: 'customTemplate',
            template: __dirname + '/src/index.html',
            // inject: 'body',
            filename: 'index.html',
        }),
        new LodashModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}

module.exports = (env, argv) => {
    if (argv.hot) {
        // Cannot use 'contenthash' when hot reloading is enabled.
        config.output.filename = '[name].[hash].js'
    }

    return config
}
