const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry : './src/main.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader"],
      },
    ]
  }

}