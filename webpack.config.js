const path = require('path')

const buildPath = path.join(__dirname, 'public', 'dist')

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  devServer: {
    hot: true
  }
}
