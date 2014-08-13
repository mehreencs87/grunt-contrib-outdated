module.exports = function (grunt) {

   grunt.initConfig({
     // Grunt test
     outdated: {
       // Test development flag
       nodev: {
          options: {
            development: false
          }
        }
     }
  });

   grunt.loadTasks('../../tasks');
   
   grunt.registerTask('default', ['outdated']);
};
