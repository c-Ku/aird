const path = require('path')

module.exports = {
  prod: {
    env: { NODE_ENV: '"production"' },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/aird/',
    jsSourceMap: true,
    cssSourceMap: true,
    analyzerReport: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: { NODE_ENV: '"development"' },
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
