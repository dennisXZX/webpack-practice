const path = require('path')

module.exports = {
  /*
    entry setting
  */
  entry: {
    // an array of multiple entry points
    main: ["./src/main.js"]
  },

  // specify the mode, development | production
  mode: "development",

  /*
    output setting
  */
  output: {
    // [name] translates to the entry file name
    filename: "[name]-bundle.js",

    // The given sequence of paths is processed from right to left
    // with each subsequent path prepended until an absolute path is constructed
    // path property specifies the local disk directory to store all your output files
    path: path.resolve(__dirname, '../dist'),

    // publicPath is a virtual directory automatically pointing to the path
    // that store all your output files
    publicPath: "/"
  },

  /*
    webpack-dev-server setting
  */
  // This set of options is picked up by webpack-dev-server
  // and can be used to change its behavior in various ways
  devServer: {
    publicPath: "/",

    // tell the server where to serve content from
    // this is only necessary if you want to serve static files
    // devServer.publicPath will be used to determine where the bundles should be served from
    // and takes precedence.
    contentBase: "dist",

    // display error and warning in the browser with a transparent overlay
    overlay: {
      warnings: true,
      errors: true
    }
  },

  /*
    loaders setting
  */
  module: {
    rules: [
      {
        test: /\.css$/,
        // the processing order of the loaders is from bottom to top
        use: [
          // style-loader adds CSS to the DOM by injecting a <style> tag
          {
            loader: "style-loader"
          },
          // css-loader interprets @import and url() and resolves them
          {
            loader: "css-loader"
          }
        ]
      },

      {
        test: /\.html$/,
        use: [
          // emit the HTML file as a separate file
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          // extract HTML and CSS from the bundle
          {
            loader: "extract-loader"
          },
          // html-loader turn HTML code into a string
          // and replace every src attribute with a require() call
          // <p>Hello <img src="webpack.png" alt="Webpack"></p>
          // "<p>Hello <img src=\"" + require("webpack.png") + "\\" alt=\"Webpack\"></p>"
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }
}