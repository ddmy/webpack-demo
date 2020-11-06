// const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackDevServer = require('webpack-dev-server')

// const app = express()
const config = require('../webpack.config')

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  open: true
}
webpackDevServer.addDevServerEntrypoints(config, options)

const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))


server.listen(3333, function () {
  console.log('Example app listening on port 3000!\n');
});
