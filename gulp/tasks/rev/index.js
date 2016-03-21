'use strict';

let gulp = require('gulp');

gulp.task('rev', function () {
  let paths = require('../paths');
  let $ = require('gulp-load-plugins')();
  let revAll = new $.revAll();
  return gulp.src(`${paths.dest}/**/*.*`)
    .pipe($.util.env.type === 'development' ? $.util.noop() : revAll.revision())
    .pipe($.util.env.type === 'development' ? $.util.noop() : gulp.dest(`${paths.dest}`))
    .pipe($.util.env.type === 'development' ? $.util.noop() : revAll.manifestFile())
    .pipe($.util.env.type === 'development' ? $.util.noop() : gulp.dest(`${paths.dest}`));
});