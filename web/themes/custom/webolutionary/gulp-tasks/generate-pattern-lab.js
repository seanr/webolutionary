import gulp from 'gulp';
import shell from 'gulp-shell';
import browserSync from 'browser-sync';

/**
 * Calls the Pattern Lab generate command to regenerate styleguide files
 * @return {Function} - Gulp function
 */
export default function() {
  return function() {
    gulp.src('')
      .pipe(shell('php pattern-lab/core/console --generate'));

    if (browserSync.active) {
      browserSync.reload({match: 'pattern-lab/public/styleguide/html/styleguide.html'});
    }
  };
}
