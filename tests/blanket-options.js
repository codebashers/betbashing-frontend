/* globals blanket, module */

var options = {
  modulePrefix: 'betbashing-frontend',
  filter: '//.*betbashing-frontend/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    lcovOptions: {
      outputFile: 'coverage-report.dat',
      renamer: function(moduleName) {
        var expression = /^APP_NAME/;
        return moduleName.replace(expression, 'app') + '.js';
      },
    },
    reporters: ['lcov'],
    autostart: true,
  },
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
