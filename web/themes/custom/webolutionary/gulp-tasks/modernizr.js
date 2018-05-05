/**
 * Generate custom Modernizr build
 * @see https://modernizr.com/docs
 */

import gulp from 'gulp';
import modernizr from 'gulp-modernizr';
import uglify from 'gulp-uglify';

/**
 * Creates a minified Modernizr file with the given options and tests
 * @param {object} config - Global configuration settings
 * @return {Function} - Gulp function
 */
export default function(config) {
  return function() {
    gulp.src(`${config.source}js/*.js`)
      .pipe(modernizr({
        crawl: false,
        options: [
          'setClasses',
          'addTest',
          'html5printshiv',
          'testProp',
          'fnBind'
        ],
        tests: [
          'csstransforms3d',
          'csstransitions',
          'touchevents',
          'flexbox',
          'pointerevents',
          'indexeddb',
          'cssfilters'
        ]
      }))
      .pipe(uglify())
      .pipe(gulp.dest(`${config.dist}js`));
  };
}
