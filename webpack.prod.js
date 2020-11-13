const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const UglifyjsWebpackPlugin  = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new UglifyjsWebpackPlugin({
      // 启用缓存
      cache: true,
      // 启用多进程，默认是 os.cpus().length - 
      parallel: true
    })
  ]
})