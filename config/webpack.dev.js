const path = require('path')

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "development",
  output: {
    // [name] translates to the entry file name
    filename: "[name]-bundle.js",

    // The given sequence of paths is processed from right to left
    // with each subsequent path prepended until an absolute path is constructed
    // path property specifies the local disk directory to store all your output files
    path: path.resolve(__dirname, '../dist'),

    // publicPath is a virtual directory automatically pointing to the path
    publicPath: "/build"
  },
  devServer: {
    contentBase: "dist"
  }
}