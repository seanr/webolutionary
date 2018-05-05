import del from 'del';

/**
 * Clears out specific files in the JS directory
 * @param {object} config - Global configuration object
 */
export default function(config) {
  return function() {
    return del([
      `${config.dist}js/main.js`,
      `${config.dist}js/common.js`,
    ]);
  };
}
