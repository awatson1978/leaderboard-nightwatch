// package.js
// should go into the /meteor-project/packages/sample_package directory

Package.describe({
  // define a message to describe the package
  summary: "This is a sample package that doesn't actually do anything.",

  // for internal dependency packages, set the internal flag true
  internal: false
});

// If you're bundling an NPM package, be sure to reference the package as a dependency
// Npm.depends({
//   nightwatch: "0.5.3"
// });

Package.on_use(function (api) {

  //var path = Npm.require('nightwatch');

  // export the object

  // if(typeof api.export !== 'undefined'){
  //   api.export('NightwatchBridge', ['client', 'server']);
  // }

  //api.add_files(path.join('audio', 'click1.wav'), 'client');

  // define dependencies using api.use
  //api.use('package_name', 'directory/to/install/into');

  // add files to specific locations using api.add_files
  //api.add_files('library_name.js', 'directory/to/install/into');

  // example: add multiple files to a location using an array
  //api.add_files(['first_library.js', 'second_library.js'], 'client');

  // example: add file to multiple locations using an array
  //api.add_files('nightwatch.js', ['server']);
});
