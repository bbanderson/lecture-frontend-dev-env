const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/", // index.html 입장에서는 이미지가 ./dist에 위치하기 때문
          name: "[name].[ext]?[hash]",
          limit: 10000,
        },
      },
    ],
  },
};
