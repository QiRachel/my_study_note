const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/js/entry.js',
  entry: {
  	entry:"./src/js/entry.js",
    home: "./src/js/home.js",
    about: "./src/js/about.js"
  },
  output: {
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    //publicPath: 'js/',//设置index.hml提供资源服务的路径，不建议，热加载有影响
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {//只服务于index.html
  	// contentBase: 'dist/'
  },
  plugins: [
	  new HtmlWebpackPlugin({
	    template: './src/index.html'
	  }),
  ],
  externals: {
  	jquery: 'jQuery'
  }
};