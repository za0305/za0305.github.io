module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
    build: {
        src: 'css/*.css',
        dest: 'css/main.min.css'
      }
    },
    concat: {
        build: {
            src: 'css/*.css',
            dest: 'css/main.min.css'
        }
    }
 
  });

 grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');



  // Default task(s).
  grunt.registerTask('default', ['concat', 'cssmin']);

};