/**
 * Created by hetaohua on 2017/9/4.
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
})