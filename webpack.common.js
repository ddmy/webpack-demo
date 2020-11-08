const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
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
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = path.parse(module.identifier()).name
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          }
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '打包 页面'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 9998
    })
  ],
  module: {
    rules: [
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