import del from 'del';

/**
 * Clears out any files in the CSS directory
 * @param {object} config - Global configuration object
 */
export default function(config) {
  return function() {
    return del([`${config.dist}css/*`]);
  };
}
