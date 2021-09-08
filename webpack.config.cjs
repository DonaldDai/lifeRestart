const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    static: [
      {
        directory: path.join(__dirname, "data"),
        publicPath: "/data",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/public",
      },
      {
        directory: path.join(__dirname, "docs"),
        publicPath: "/docs",
      },
      {
        directory: path.join(__dirname, "src"),
        publicPath: "/src",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  // resolve: {
  //   extensions: ['.js'],
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead",
                  useBuiltIns: "usage",
                  corejs: "3.8.3",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};