'use strict';
const gulp = require('gulp');

module.exports = function (destFile, destFolder, options, watch) {
  const browserify = require("browserify");
  const rebundle = require('./rebundle.js');
  const pkgify = require('pkgify');
  const paths = require('../../../paths');
  const envify = require('envify/custom');
  const babelify = require("babelify");

  if (watch === null) {
    watch = true;
  }
  options = options || {};

  let bundler = browserify(options);

  if (watch) {
    let watchify = require('watchify');
    bundler = watchify(bundler);
  }
  bundler.transform(babelify);

  bundler.transform(pkgify, {
    packages: {
      underscore: "./node_modules/lodash/index.js"
    },
    relativeTo: paths.base,
    global: true
  });


  bundler.transform(envify({
      NODE_ENV: process.env.NODE_ENV
  }));
  bundler.transform(require('brfs'));

  function bundle() {
    return rebundle(bundler, destFile, destFolder);
  }

  bundler.external('jquery');

  if (watch) {
    bundler.on("update", bundle);
  }

  return bundle();
};

