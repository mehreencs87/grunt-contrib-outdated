## grunt-contrib-outdated

Grunt task to check for [outdated NPM dependencies](https://www.npmjs.org/doc/cli/npm-outdated.html).

### Install

```js
  npm install --save-dev grunt-contrib-outdated
```

### Usage

```js
   grunt.initConfig({
     outdated: {
       dev: {
          options: {
            // Perform the check with devDependencies too.
            development: true
          }
        }
     }
  });

   grunt.loadNpmTasks('grunt-run-grunt');
   
```

### TODO

 * Add more flags
 * Better error handling
 * Use NPM instead of `spawn`?
