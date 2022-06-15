const { merge } = require("webpack-merge");
const common = import("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
});
