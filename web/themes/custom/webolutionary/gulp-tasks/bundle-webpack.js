/**
 * Bundles modules using Webpack
 * Webpack configuration is in webpack.config.js
 */

import webpack from 'webpack';
import webpackConfig from '../webpack.main';
import gutil from 'gulp-util';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

/**
 * Using main.js as the root, bundles all imported modules
 * Writes the compiled file to the dist directory as bundle.js
 * @param {object} config - Global configuration option
 * @param {boolean} isProduction - Whether to compile for production
 * @param {Function} callback - Optional callback function to run after Webpack
 * completes.
 * @returns {Function} -
 */
export default function(config, isProduction, callback = null) {
  return function() {
    const settings = Object.create(webpackConfig);
    if (isProduction) {
      settings.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    else {
      settings.devtool = 'inline-source-map';
    }
    webpack(settings, function(err, stats) {
      if (err) {
        throw new gutil.PluginError('bundle-webpack', err);
      }
      gutil.log("bundle-webpack", stats.toString({
        colors: true,
        errorDetails: true
      }));
      if (typeof callback === 'function') {
        callback();
      }
    });
  };
}
