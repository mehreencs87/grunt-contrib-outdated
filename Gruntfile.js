module.exports = function (grunt) {

   grunt.initConfig({

     run_grunt: {
        options: {
            minimumFiles: 1
        },
        dev: {
            options: {
                log: true,
                expectFail: true
            },
            src: ['test/fixture/dev.js']
        },
        nodev: {
            options: {
                log: true
            },
            src: ['test/fixture/nodev.js']
        }
    }
   });

   grunt.loadTasks('tasks');
   grunt.loadNpmTasks('grunt-run-grunt');

   grunt.registerTask('test', ['run_grunt']);


};
