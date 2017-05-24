var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      main: ['./src/js/main', './src/css/main.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // publicPath: '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader',
                  use: ['css-loader?url=false', 'resolve-url-loader', 'sass-loader']})
                  // use: ['css-loader?url=false', 'resolve-url-loader', 'sass-loader?sourceMap']})
            },
            {
              test: /\.html$/,
              use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },

    stats: {
        colors: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new ExtractTextPlugin("css/[name].css"),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    watch: false
};
