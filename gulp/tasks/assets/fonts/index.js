'use strict';
var gulp = require('gulp');

gulp.task('assets:fonts', function () {
  var paths = require('../../paths');
  var errorCatcher = require('../../../helpers/errors');
  var browserSync = require('../../../helpers/browser_sync');
  var gutil = require('gulp-util');

  var srcPath = `${paths.src.fonts}/**/*.*`;

  return gulp.src(srcPath)
    .pipe(errorCatcher.errorCatcher())
    .pipe(gulp.dest(`${paths.dest}/fonts`))
    .pipe(gutil.env.watch ? browserSync.stream(): gutil.noop());

});