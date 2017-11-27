const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

const path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: "js/bundle.js",
      publicPath: "/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/components/Shared/images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  },
  plugins: [HtmlWebpackPluginConfig,
  new Dotenv({
      path: './.env',
      safe: false 
    })
  ]
}