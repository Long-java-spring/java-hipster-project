'use strict';
const webpack = require('webpack');

const { styleLoaders } = require('./vue.utils');
const config = require('./config');

module.exports = (env, options) => {
  const devConfig = {
    module: {
      rules: styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }),
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,
    output: {
      filename: 'app/[name].[contenthash].bundle.js',
      chunkFilename: 'app/[id].[chunkhash].chunk.js',
    },
    optimization: {
      moduleIds: 'named',
    },
    plugins: [],
  };
  if (!options.env.WEBPACK_SERVE) return devConfig;
  return devConfig;
};
