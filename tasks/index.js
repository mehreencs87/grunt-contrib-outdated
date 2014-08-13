var format = require('util').format;

var spawn = require('child_process').spawn;

module.exports = function (grunt) {
  grunt.registerMultiTask('outdated', 'Check for outdated dependencies on package.json.', function () {

    var done = this.async();
    var options = this.options();

    var args = ['outdated', '--depth', '0', '--json'];

    if (!options.development) {
      args.push('--production');
    }

    var ref = spawn('npm', args);
    
    var result = '';
    var error = '';


    ref.stdout.on('data', function (data) {
      result += data.toString();
    });

    ref.stdout.on('error', function (err) {
      // TODO
    });

    ref.stderr.on('data', function (data) {
      // TODO
      error += error.toString();
    });
    

    var exited = false;

    ref.on('error', function (err) {
      // TODO
      exited = true;
      done(new Error(error));
    });

    function fail (error) {
      grunt.log.error(result);
      grunt.log.error(error);
      done(new Error(error));
    }

    ref.on('close', function (code) {
      if (exited) { return; }

      if (code !== 0) {
        return fail(error || format('Error command exit code was: %d', code));
      }

      try {
        result = JSON.parse(result);
      } catch (e) {
        return fail(e.message);
      }

      var deps = Object.keys(result);

      if (!deps.length) {
        grunt.log.ok('No dependencies outdated.');
        return done(true);
      }

      function checkOutdated (dependencyName) {
        var dependency = result[dependencyName];

        if (dependency.wanted !== dependency.current) {
          grunt.log.error(format('Current dependency: %s@%s differs from wanted: %s@%s', dependencyName, dependency.current, dependencyName, dependency.wanted));
          return true;
        }
        return false;
      }

      var isOutdated = deps.some(checkOutdated);

      if (isOutdated) {
        return done(new Error('Oudated dependencies found'));
      }

      done(true);
      
    });

  });
};
