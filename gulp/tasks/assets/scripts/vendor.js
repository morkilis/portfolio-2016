'use strict';

let gulp = require('gulp');

gulp.task('assets:scripts:vendor', function () {
  let gulp = require('gulp');
  let paths = require('../../paths');
  let browserSync = require('../../../helpers/browser_sync');
  let errorCatcher = require('../../../helpers/errors');
  let mainBowerFiles = require('main-bower-files');
  let merge = require('merge-stream');
  let $ = require('gulp-load-plugins')();


  merge(gulp.src(`${paths.src.scripts}/libs/**/*.js`), gulp.src(mainBowerFiles()))
    .pipe(errorCatcher.errorCatcher())
    .pipe($.util.env.type === 'production' ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(`${paths.dest}/scripts/vendor/`))
    .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());

});