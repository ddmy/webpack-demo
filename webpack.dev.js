const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: false,
    port: 8800,
    hot: false,
    hotOnly: false,
    // watchContentBase: false,
    // liveReload: false
  }
})