'use strict';

var gulp   = require('gulp');

gulp.task('assets:images', function () {
  let pngquant = require('imagemin-pngquant');
  let browserSync = require('../../../helpers/browser_sync');
  let errorCatcher = require('../../../helpers/errors');
  let paths = require('../../paths');
  let srcPath = `${paths.src.images}/**/*.*`;
  let $ = require('gulp-load-plugins')();
  return gulp.src(srcPath)
    .pipe(errorCatcher.errorCatcher())
    .pipe($.util.env.type === 'production' ? $.imagemin({
      progressive: false,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }) : $.util.noop())
    .pipe(gulp.dest(`${paths.dest}/images`))
    .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});


gulp.task('assets:images-no-smoosh', function () {
  let browserSync = require('../../../helpers/browser_sync');
  let errorCatcher = require('../../../helpers/errors');
  let paths = require('../../paths');
  let srcNoSmoothPath = `${paths.src.imagesUncompressed}/**/*.*`;
  let $ = require('gulp-load-plugins')();
  return gulp.src(srcNoSmoothPath)
    .pipe(errorCatcher.errorCatcher())
    .pipe(gulp.dest(`${paths.dest}/images`))
    .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});