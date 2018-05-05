import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

/**
 * Combines SVG icons into a single sprite
 * @param {object} config - Global configuration setting
 * @param {string} filename - Filename of sprite; defaults to icon-sprite.svg
 * @param {string} destination - Path where sprite should be written; defaults to views/partials
 * @param {boolean} inline - Inline setting to pass to svgSprite; defaults to false
 * @returns {Function} - Gulp function
 */
export default function({
  config = {},
  filename = 'icon-sprite.svg',
  destination = config.dist + 'img',
  inline = false
} = {}) {
  return function() {
    return gulp.src(`${config.source}icons/*.svg`)
      .pipe(svgSprite({
        mode: {
          symbol: {
            dest: '.',
            sprite: filename,
            bust: false,
            inline: inline,
            dimensionAttributes: false
          }
        }
      }))
      .pipe(gulp.dest(destination));
  };
}
