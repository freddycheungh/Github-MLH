const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    'webpack-hot-middleware/client',
    __dirname + '/client/src/index.js'
  ],
  plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test:/\.js?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  },
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "client/src/components"),
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  node: {
    fs: 'empty',
    }
};
