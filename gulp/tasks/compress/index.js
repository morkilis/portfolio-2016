'use strict';
let gulp = require('gulp');

gulp.task('compress', ['build'], function () {
  let paths = require('../paths');
  let gzip = require('gulp-gzip');
  let debug = require('gulp-debug');
  let gulpif = require('gulp-if');

  gulp.src(`${paths.dest}/**/*.{js,html,css}`)
    .pipe(gzip({append: false}))
    .pipe(debug())
});