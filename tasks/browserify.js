'use strict';

module.exports = function (grunt, options) {
  return {
    essence: {
      files: {
        '<%= paths.js %>/application.js': ['<%= paths.javascripts %>/application.js'],
        '<%= paths.js %>/essence.js': ['<%= paths.javascripts %>/essence.js']
      },
      options: {
        transform: [
          ['reactify', {'es6': true}]
        ],
        watch: true,
        keepAlive: true
      }
    },

    example: {
      files: {
        '<%= paths.js %>/essence.min.js': ['<%= paths.javascripts %>/example.js'],
        'examples/project-template/dist/js/essence.js': ['<%= paths.javascripts %>/example.js']
      },
      options: {
        transform: [
          ['reactify', {'es6': true}]
        ],
        watch: false,
        keepAlive: false
      }
    }
  };
};
