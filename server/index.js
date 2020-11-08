const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackDevServer = require('webpack-dev-server')

const IS_DEV = process.env.NODE_ENV === 'development'
let server
let config

if (IS_DEV) {
  config = require('../webpack.dev.js')
  const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    open: true
  }
  webpackDevServer.addDevServerEntrypoints(config, options)
  const compiler = webpack(config)
  server = new webpackDevServer(compiler, options)
} else {
  server = express()
  config = require('../webpack.prod.js')
  const compiler = webpack(config)
  server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))
}

server.listen(3333, function () {
  console.log('Example app listening on port 3000!\n');
})
