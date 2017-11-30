var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  context: path.resolve(__dirname, "."),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
      filename: "index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    https: true,
    historyApiFallback: true
  }
};
