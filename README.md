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

### Tests

```
npm test
```

### TODO

 * Add more flags
 * Better error handling
 * Use NPM instead of `spawn`?
 
## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
