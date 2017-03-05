module.exports = {

  resolve: {
    extensions: ['.ts','.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  context: __dirname + "/app",
  entry: "./main.ts",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  }
}
