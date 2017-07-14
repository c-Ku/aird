require('shelljs/global')
process.env.NODE_ENV = 'production'
const path = require('path')
const config = require('../config')
const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.prod')

const spinner = ora('开始构建......')
spinner.start()
const assetsPath = path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
