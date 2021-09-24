const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./my-webpack-loader.js")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 20000, // 20KB 이하 파일에 한해 base64(main.js 내 문자열로 변환) 적용, 20KB 초과시 file-loader(파일 그대로 복사) 적용
        },
      },
    ],
  },
};
