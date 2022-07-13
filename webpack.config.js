const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  devServer: {
    port: 3000,
    compress: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(s)?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Cursor Homework 14",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "./src/homeworks/10-cursor-homework/audio"
          ),
          to: path.resolve(__dirname, "dist/audio"),
        },
        {
          from: path.resolve(
            __dirname,
            "./src/homeworks/12-cursor-homework/img"
          ),
          to: path.resolve(__dirname, "dist/img"),
        },
      ],
    }),
  ],
}
