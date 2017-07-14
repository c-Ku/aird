const path = require('path')
const config = require('../config')
const utils = require('./utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const projectRoot = [path.resolve(__dirname, '../docs'), path.resolve(__dirname, '../components')]
const env = process.env.NODE_ENV

module.exports = {
  entry: [
    path.resolve(__dirname, '../docs/index')
  ], 
  output: {
    path: config.prod.assetsRoot,
    publicPath: env === 'production' 
                ? config.prod.assetsPublicPath
                : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../docs'),
      '#': path.resolve(__dirname, '../components'),
      SERVER: path.resolve(__dirname, '../config/server')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: projectRoot,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: projectRoot
      },                  
      {
        test: /\.css$/,
        use: utils.cssLoaders(['style-loader', 'css-loader', 'postcss-loader'])
      },      
      {
        test: /\.less$/,
        use: utils.cssLoaders(['style-loader', 'css-loader', 'postcss-loader', 'less-loader'])
      },     
      {
        test: /\.md$/,
        use: [
            {
                loader: "raw-loader"
            }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
