import gulp from 'gulp';

/**
 * Copies font directory from source to assets
 * @param {object} config - Global configuration settings
 * @returns {Function} - Gulp function
 */
export default function(config) {
  return function() {
    return gulp.src(`${config.source}fonts/**/*`)
      .pipe(gulp.dest(`${config.dist}fonts`));
  };
}
