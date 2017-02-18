const path = require('path')

const buildPath = path.join(__dirname, 'public', 'dist')

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.resolve('./src')]
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.sass$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?indentedSyntax&sourceMap&sourceMapContents'
    }, {
      test: /\.(ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  devServer: {
    hot: true
  }
}
