/**
 * Created by hetaohua on 2017/8/31.
 */
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:{
        main:'./src/index.js',
        vendor:[
            'lodash'
        ]
        // print:'./src/print.js'
        // another: './src/another-module.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot: true
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            },
            {
                test:/\.(csv|tsv)$/,
                use:['csv-loader']
            },
            {
                test:/\.xml$/,
                use:['xml-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Code Splitting'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
}
