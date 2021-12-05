---
title: "5 mins to make your webpack + react app"
date: "2017-06-28T17:40:32.169Z"
description: As webpack is so popular now, let’s try to use webpack to build a react development environment. We will also publish the package to npm.
---

As webpack is so popular now, let’s try to use webpack to build a react development environment. We will also publish the package to npm.

## Init npm environment

1.  create a new folder with name like react-app-webpack: **mkdir react-app-webpack-basic**, go to the folder **cd react-app-webpack-basic**, then type npm init in the console. In the auto setup environment, type the package name, version and all other can be default.

2.  install the package we need here

```shell
npm i webpack webpack-dev-server --save-dev
npm i react react-dom --save
```

3.  optional: for the redux

```shell
npm i redux react-redux react-router --save
```

## Set up webpack config

1.  Install dependency

```shell
// for loader
npm i style-loader css-loader babel-loader url-loader --save-dev
// for plugins
npm i autoprefixer html-webpack-plugin --save-dev
// for babel
npm i babel-core babel-preset-es2015 babel-preset-react --save-dev
// for less
npm i file-loader less less-loader --save-dev

```

2.  Install react-transform-hrm to make babel and webpack work together

```shell
npm i babel-plugin-react-transform react-transform-hmr --save-dev
```

create a .babelrc file with following code:

```json
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "plugins": [
        [
          "react-transform",
          {
            "transform": [
              {
                "transform": "react-transform-hmr",
                "imports": ["react"],
                "locals": ["module"]
              }
            ]
          }
        ]
      ]
    }
  }
}
```

3.  Create a file with name webpack.config.js : touch webpack.config.js

```js
var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var OpenBrowserPlugin = require("open-browser-webpack-plugin")
module.exports = {
  entry: path.resolve(__dirname + "/app/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader?modules",
      },
      {
        test: /\.(png|gif|jpg|jpge|bmp)$/i,
        loader: "url-loader?limit=5000",
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: "url-loader?limit=5000",
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      postcss: [require("autoprefixer")],
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: "http://localhost:8080",
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(
        JSON.parse(process.env.NODE_ENV == "dev" || "false")
      ),
    }),
  ],
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
}
```

4.  Create a template file

```shell
mkdir app
cd app
touch index.tmpl.html
open index.tmpl.html
```

You can type your basic html file in index.tmpl.html :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="urf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,user-scalable=no"
    />
    <titile>React webpack demo</titile>
  </head>
  <body>
    <div id="root">I am the tempate</div>
  </body>
</html>
```

5. Then create a file name index.js and make a react component

```js
import React from "react"
import { render } from "react-dom"
class Hello extends React.Component {
  render() {
    return <p>hello world yew</p>
  }
}
render(<Hello />, document.getElementById("root"))
```

## Start your app!

In package.json file, change script to

```js
”start”: “NODE_ENV=dev webpack-dev-server — progress”
```

In your console, type: **npm start**

Oho!! You have an react app running!!
See repo here if you got lost:
[https://github.com/YuanyuanMaggie/front-end/tree/master/9-webpack](https://github.com/YuanyuanMaggie/front-end/tree/master/9-webpack)
