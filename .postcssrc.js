// https://github.com/michael-ciniawsky/postcss-load-config
const package = require('./package.json')

module.exports = {
  "plugins": {
    "autoprefixer": { browsers: package.browsersList },
  }
}
