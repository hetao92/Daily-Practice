/**
 * Created by hetaohua on 2017/9/4.
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack');


module.exports = merge(common,{
    devtool: 'cheap-module-source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        })
    ]
})