const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.prod.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (loaders) {
  if (process.env.NODE_ENV === 'production') {
    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loaders.slice(1)
    })
  } else {
    return loaders
  }
}
