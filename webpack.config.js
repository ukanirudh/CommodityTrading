const path = require("path");
const fs  = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './antThemeCustomization.less'), 'utf8'));

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react'],
              plugins: [
                'transform-runtime',
                ['import', { libraryName: "antd", style: true }]
              ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              modifyVars: themeVariables,
              javascriptEnabled: true,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
