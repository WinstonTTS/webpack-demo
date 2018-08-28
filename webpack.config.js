module.exports = {
  entry: {
    app: "./app/javascript/index.js"
  },
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: __dirname + "/dist",
  },
  mode: "development",
  devServer: {
    contentBase: "./dist/",
    port: 9000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader"}
        ]
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: ["./node_modules/"]
      },
    ]
  }
};