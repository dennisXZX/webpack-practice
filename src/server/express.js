import express from 'express'
import path from 'path'

// create an Express instance
const server = express()

const webpack = require('webpack')
const config = require('../../config/webpack.dev')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)

server.use(webpackDevMiddleware)

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

server.use(webpackHotMiddleware)

// middleware to serve static content
const staticMiddleware = express.static('dist')

server.use(staticMiddleware)

// start the server
server.listen(8080, () => {
  console.log('Server is listening')
})

