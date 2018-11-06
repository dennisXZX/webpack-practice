const path = require('path')

module.exports = {
  /*
    entry setting
  */
  entry: {
    // use an array to specify multiple entry points
    // "@babel/polyfill" fill up the missing features in older browsers
    // but you can select just the features you need (like Promise in this example)
    // to reduce bundle size
    main: ["core-js/fn/promise", "./src/main.js"]
  },

  // specify the mode, 'development' or 'production'
  mode: "development",

  /*
    output setting
  */
  output: {
    // [name] translates to the entry file name
    filename: "[name]-bundle.js",

    // The given sequence of paths is processed from right to left
    // with each subsequent path prepended until an absolute path is constructed
    // __dirname is provided by Node.js and refers to the path of the current file
    // path property specifies the local disk directory to store all your output files
    path: path.resolve(__dirname, '../dist'),

    // publicPath is a virtual directory automatically pointing to the root path
    // that stores all your output files
    publicPath: "/"
  },

  /*
    webpack-dev-server setting
  */
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
      /* start of loaders */

      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },

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
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },

      {
        test: /\.(jpg|gif|png)$/,
        use: [
          // extract images to separate files
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }

      /* end of loaders */
    ]
  }
}