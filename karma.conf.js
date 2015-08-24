module.exports = function(config) {
  'use strict';
  
  config.set({
    basePath:   '',
    port:       9876,
    colors:     true,
    autoWatch:  true,
    singleRun:  false,
    logLevel:   config.LOG_INFO,

    frameworks: ['jasmine'],
    reporters:  ['progress'],
    browsers:   ['PhantomJS'],

    files: [
      'public/main.js',
      'spec/**/*_spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'spec/**/*_spec.js': ['babel'],
    },
    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
      },
    },
  });
};
