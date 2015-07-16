module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      src: [
        'test/helper.js',
        'test/*.spec.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.registerTask('default', ['jasmine'])
};
