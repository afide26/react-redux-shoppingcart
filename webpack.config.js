const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry:'./src/app.js',
  output:{
    filename: './public/bundle.js',
    path: __dirname
  },
  watch: true,
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react', 'es2015', 'stage-1']
        }
      }

    ]
  }
}
