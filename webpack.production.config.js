const path = require('path');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowerPlugin = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const host = 'https://viezhong.top/communication';

module.exports = {
    entry: {
        bundle: './src/index.js'
    },

    output : {
        path: path.resolve(__dirname, "../back_end_koajs/apps/communication"),
        filename: '[name].js',
        publicPath: host
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".jsx", ".json", ".css", ".scss"]
    },

    context: __dirname,

    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, "src")],
            enforce: "post",
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["react", "env"],
                    plugins: ["transform-object-rest-spread"]
                }
            }]
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader?modules", {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        require('cssnano')({
                            preset: 'default',
                        }),
                        require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
                    ]
                }
            }, "sass-loader"]
        }, {
            test: /\.(?:png|jpg|gif|svg)$/,
            loader: 'url-loader?limit=8192&name=image/[hash].[ext]' //小于8k,内嵌;大于8k生成文件
        }]
    },

    mode: "production",

    optimization: {
        minimize: true,
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: /node_modules/,
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: 'src/index.ejs',
            title: '模拟微信电脑版客户端',
            favicon: path.resolve(__dirname, "src/image/favicon.ico")
        }),
        new OpenBrowerPlugin({
            url: host
        }),
        new MiniCssExtractPlugin({
            filename: "plugin.css"
        })
    ]
}