/**
 * Lint JavaScript files
 * ESHint configuration is in package.json
 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import _if from 'gulp-if';
import browserSync from 'browser-sync';

/**
 * Runs any JavaScript files not from third-party vendors through ESLint.
 * Breaks on error only if BrowserSync is not currently running.
 * @param {object} config - Global configuration settings
 * @return {Function} - Gulp function
 */
export default function(config) {
  return function() {
    gulp.src([`${config.source}js/**/*.js`, `!${config.source}js/vendor/*.js`])
      .pipe(eslint())
      .pipe(eslint.format('table'))
      .pipe(_if(!browserSync.active, eslint.failAfterError()));
  };
}
