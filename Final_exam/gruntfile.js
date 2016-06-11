module.exports = function(grunt) {

    grunt.initConfig({
    // sass: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'scss',
    //       src: ['css/main.scss'],
    //       dest: 'css',
    //       ext: 'css/main.css'
    //     }]
    //   }
    // },
        sass: {
        dist: {
          files: {
            'css/main.css': 'css/main.scss'
          }
        }
      },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/*.scss'],
        tasks: ['sass'],
      }
     } 
  

    });


grunt.loadNpmTasks('grunt-contrib-sass');

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass']);

};