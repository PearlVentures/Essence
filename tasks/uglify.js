'use strict';

module.exports.tasks = {
  uglify: {
    options: {
      compress: {
        drop_console: true
      },
      sourceMap: false
    },
    main: {
      files: {
        'examples/project-template/dist/js/essence.min.js': [
          'examples/project-template/dist/js/essence.js'
        ]
      }
    }
  }
};
