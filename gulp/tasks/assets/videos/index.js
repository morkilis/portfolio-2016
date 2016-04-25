'use strict';

var gulp = require('gulp');

gulp.task('assets:videos', function () {
  let browserSync = require('../../../helpers/browser_sync');
  let errorCatcher = require('../../../helpers/errors');
  let paths = require('../../paths');
  let srcPath = `${paths.src.videos}/**/*.*`;
  let $ = require('gulp-load-plugins')();

  return gulp.src(srcPath)
    .pipe(errorCatcher.errorCatcher())
    .pipe(gulp.dest(`${paths.dest}/videos`))
    .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});