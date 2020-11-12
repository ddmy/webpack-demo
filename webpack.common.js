const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 打包分析服务
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    // app: './src/index.js',
    test: './src/test.js',
    // another: './src/another-module.js'
    // vendor: [
    //   'lodash'
    // ]
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].async.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    // 分割代码块
    splitChunks: {
      // 公用模块抽离
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
          name: 'commons'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '打包 页面'
    }),
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    //   analyzerPort: 9998
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}