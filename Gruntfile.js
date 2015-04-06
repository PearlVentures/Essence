/* File: Gruntfile.js */

'use strict';

module.exports = function (grunt) {

  var loadTasks = require('load-grunt-tasks'),
      loadConfs = require('load-grunt-configs'),
      pkg = grunt.file.readJSON('package.json');

  // Initialize Grunt config
  grunt.initConfig(loadConfs(grunt, {
    paths: pkg.paths,
    config: { src: pkg.paths.tasks },
    browserify: {
      //'static/assets/js/demo.js': ['src/js/demo.js'],
      'static/assets/js/essence.js': ['src/js/essence.js'],
      'static/assets/js/application.js': ['src/js/application.js'],
      'options': {
        transform: [
          ['reactify', {'es6': true}]
        ]
      }
    }
  }));

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('example', ['browserify:example', 'less:example', 'uglify']);
  // grunt.registerTask('browserify', ['browserify']);

  loadTasks(grunt);
};
