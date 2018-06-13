const path = require('path');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowerPlugin = require('open-browser-webpack-plugin');

const port = 8080;
const host = `http://localhost:${port}/`;

module.exports = {
    entry: {
        bundle: './src/index.js'
    },

    output : {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].js',
        chunkFilename: 'lib/[name].min.js',
        publicPath: host
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".jsx", ".json", ".css", ".scss"]
    },

    devtool: "eval-source-map",

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
            use: ["style-loader", "css-loader?modules", {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
                    ]
                }
            }, "sass-loader"]
        }, {
            test: /\.(?:png|jpg|gif|svg)$/,
            loader: 'url-loader?limit=8192&name=image/[hash].[ext]' //小于8k,内嵌;大于8k生成文件
        }]
    },

    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api/v1': 'http://localhost:8081'
        },
        contentBase: [path.join(__dirname, "dist")],
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        port
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
        })
    ]
}