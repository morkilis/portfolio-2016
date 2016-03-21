'use strict';


module.exports = function (bundler, file, dest) {
  let gulp = require('gulp');
  let source = require('vinyl-source-stream');
  let buffer = require('vinyl-buffer');
  let collapse = require('bundle-collapser/plugin');
  let $ = require('gulp-load-plugins')();
  let browserSync = require('../../../../helpers/browser_sync');
  let paths = require('../../../paths');

  if (dest === null) {
    throw new Error("please specify dest");
  }

  if ($.util.env.type === 'production') {
    return bundler
      .plugin(collapse)
      .bundle()
      .pipe($.plumber())
      .pipe(source(file))
      .pipe(buffer())
      .pipe($.uglify())
      .pipe($.size({
        showFiles: true,
        gzip: true
      }))
      .pipe(gulp.dest(dest))
  } else {
    return bundler
      .bundle()
      .on('error', (err)=> console.error(err.message))
      //.pipe(errorCatcher.errorCatcher()) NOTE(Itay): This doesn't work, doing it with on('error')
      .pipe($.plumber())
      .pipe(source(file))
      .pipe(buffer())
      .pipe($.size({
        showFiles: true,
        gzip: true
      }))
      .pipe(gulp.dest(dest))
      .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
  }
};
