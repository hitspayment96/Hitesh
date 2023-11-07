const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
      nandha:'./src/a.js'
  },
  output: {
      path: path.resolve(__dirname,'dist/js'),
      filename: '[name].bundle.js'
  },
  watch: true
}