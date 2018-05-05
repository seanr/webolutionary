/**
 * Run JavaScript Unit Tests
 */

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import chai from 'chai';
import babel from 'babel-core/register';

export default function(config) {
  return function() {
    return gulp.src([`${config.tests}/**/*.js`], { read: false })
      .pipe(mocha({
        globals: {
          chai: chai
        },
        compilers: {
          js: babel
        }
      }));
  };
}
