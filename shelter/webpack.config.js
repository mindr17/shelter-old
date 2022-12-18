const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    global: "./src/assets/global-imports.js",
    index: "./src/pages/main/index.js",
    pets: "./src/pages/pets/index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico|xml)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/main/index.html",
      inject: true,
      chunks: ["global", "index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pets/index.html",
      inject: true,
      chunks: ["global", "pets"],
      filename: "pets.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    assetModuleFilename: "[path]/[name][ext]",
    chunkFilename: "[id].[chunkhash].js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "auto",
    clean: true,
  },
};
