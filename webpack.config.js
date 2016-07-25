var webpack = require('webpack');

// TODO sourcemaps with webpack


module.exports = {
  entry: './website/index.js',

  output: {
    filename: './website/bundle.js',
    publicPath: '/public'
  },

  module: {
    loaders: [
      { 
        test: /.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015', 'react']
        }
      }
    ]
  }
}