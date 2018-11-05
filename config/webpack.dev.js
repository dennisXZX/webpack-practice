const path = require('path')

module.exports = {
  // entry setting
  entry: {
    // an array of multiple entry points
    main: ["./src/main.js"]
  },

  // specify the mode, development | production
  mode: "development",

  // output setting
  output: {
    // [name] translates to the entry file name
    filename: "[name]-bundle.js",

    // The given sequence of paths is processed from right to left
    // with each subsequent path prepended until an absolute path is constructed
    // path property specifies the local disk directory to store all your output files
    path: path.resolve(__dirname, '../dist'),

    // publicPath is a virtual directory automatically pointing to the path
    publicPath: "/build/"
  },

  // This set of options is picked up by webpack-dev-server
  // and can be used to change its behavior in various ways.
  devServer: {
    publicPath: "/build/",

    // Tell the server where to serve content from
    // This is only necessary if you want to serve static files
    // devServer.publicPath will be used to determine where the bundles should be served from
    // and takes precedence.
    contentBase: "dist"
  }
}