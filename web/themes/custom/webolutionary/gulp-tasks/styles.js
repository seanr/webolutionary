import gulp from 'gulp';
import cssGlobbing from 'gulp-css-globbing';
import _if from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import handleError from './utilities/handleError';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import minifycss from 'gulp-clean-css';
import size from 'gulp-size';
import browserSync from 'browser-sync';

/**
 * Compiles SCSS files and adds browser-specific prefixes. If compiling for production,
 * minifies CSS; otherwise writes source maps and updates BrowserSync.
 * @param {object} config - Global config settings
 * @param {boolean} isProduction - Whether to compile for production
 * @returns {Function} - Gulp function
 */
export default function(config, isProduction) {
  return function() {
    return gulp.src([
      `${config.source}scss/style.scss`,
      `${config.source}scss/pattern-scaffolding.scss`
    ])
      .pipe(cssGlobbing({
        extensions: ['.scss']
      }))
      .pipe(_if(!isProduction, sourcemaps.init()))
      .pipe(sass({includePaths: config.sassInclude}))
        .on('error', handleError)
        .on('error', notify.onError())
      .pipe(autoprefixer({
        'browsers': ['last 2 versions', 'ie 11', 'iOS 8'],
        'supports': false,
      }))
      .pipe(_if(isProduction, minifycss()))
      .pipe(_if(!isProduction, sourcemaps.write('./')))
      .pipe(size({
        'showFiles': true
      }))
      .pipe(gulp.dest(`${config.dist}css/`))
      .pipe(_if(browserSync.active, browserSync.stream({match: '**/*.css'})));
  };
}
