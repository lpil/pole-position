'use strict';

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'main.js': /^app/,
      }
    },
  },

  npm: { enabled: true },
};
