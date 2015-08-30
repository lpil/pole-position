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

  npm: { enabled: true },
};
