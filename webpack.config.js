var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      main: ['./src/js/main', './src/css/main.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    // devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader',
                  use: ['css-loader?url=false', 'resolve-url-loader', 'sass-loader']})
                  // use: ['css-loader?url=false', 'resolve-url-loader', 'sass-loader?sourceMap']})
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=img/[name].[ext]"
            }
        ]
    },

    stats: {
        colors: true
    },
    plugins: [
      new ExtractTextPlugin("css/[name].css")
    ],
    watch: false
    // devtool: 'source-map'
};
