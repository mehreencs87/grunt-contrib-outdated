module.exports = function (grunt) {

   grunt.initConfig({
     // Grunt test
     outdated: {
       // Test development flag
       dev: {
          options: {
            development: true
          }
        }
     }
  });

   grunt.loadTasks('../../tasks');
   
   grunt.registerTask('default', ['outdated']);
};
