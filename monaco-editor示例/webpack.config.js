const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // development production
  entry: {
    app: "./src/index.js",
    "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
    "json.worker": "monaco-editor/esm/vs/language/json/json.worker",
    "css.worker": "monaco-editor/esm/vs/language/css/css.worker",
    "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
    "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker",
    "sql.worker": "monaco-editor/esm/vs/basic-languages/sql/sql.js",
  },
  output: {
    globalObject: "self",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8099,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
  ],
};