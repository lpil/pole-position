'use strict';

exports.config = {
  files: {
    javascripts: {
      joinTo: 'main.js',
    },
    stylesheets: {
      joinTo: 'main.css',
      defaultExtension: 'scss',
    },
  },

  paths: {
    watched: [
      'app/',
      'stylesheets/',
    ],
  },

  npm: { enabled: true },
};
