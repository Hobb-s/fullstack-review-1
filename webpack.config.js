const path = require('path');

module.exports = {
  entry: path.resolve('./client/src/index.js'),
  output: {
    path: path.resolve('./client/public/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?x/,
      exclude: /node_modules/,
      include: path.resolve('./client/src'),
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
