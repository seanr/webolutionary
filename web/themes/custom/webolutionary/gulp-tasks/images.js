import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';

/**
 * Optimizes images for reduced file size
 * @param {object} config - Global configuration settings
 * @returns {Function} - Gulp function
 */
export default function(config) {
  return function() {
    return gulp.src(`${config.source}img/**/*`)
      .pipe(cache(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
      })))
      .pipe(gulp.dest(`${config.dist}img`));
  };
}
