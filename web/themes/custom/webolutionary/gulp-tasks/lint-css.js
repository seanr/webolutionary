/**
 * Lints SCSS files using Stylelint
 * Stylelint configuration is in package.json
 */

import gulp from 'gulp';
import stylelint from 'gulp-stylelint';
import browserSync from 'browser-sync';

/**
 * Lints all SCSS files in the source directory
 * @param {object} config - Global configuration
 * @return {Function} - Gulp function
 */
export default function(config) {
  return function() {
    gulp.src([
        `${config.source}scss/**/*.scss`
    ])
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      syntax: 'scss',
      failAfterError: !browserSync.active
    }));
  };
}
