"use strict";

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 9191;
const app = express();

/* Remove Webpack Middleware Setup on Production */
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config");
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  hot: true
}));
app.use(webpackHotMiddleware(compiler));
/* -------------------------------------------- */

// Adjust Static file serving (the last paramenter , 'dist') - Production ONLY
app.use(express.static(path.resolve(__dirname, "..")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server running on port ${PORT}`);
});

module.exports = app;