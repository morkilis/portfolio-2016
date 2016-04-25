'use strict';

let gulp = require('gulp');

gulp.task('smoosh', function () {
  let $ = require('gulp-load-plugins')();
  let paths = require('../paths');

  return gulp.src(`${paths.dest}/**/*.html`)
    .pipe($.util.env.type === 'development' ? $.util.noop() : $.smoosher())
    .pipe(gulp.dest(`${paths.dest}`));
});