'use strict';
var gulp = require('gulp');

gulp.task('assets:css', function() {
  const errorHandlers = require('../../../helpers/errors');
  const browserSync = require('../../../helpers/browser_sync');
  const paths = require('../../paths');
  const srcPath = `${paths.src.css}/**/*.scss`;
  const $ = require('gulp-load-plugins')();
  const neat = require('node-neat').includePaths;

  return gulp.src(srcPath)
      .pipe(errorHandlers.errorCatcher())
      .pipe($.sass(
          {
            includePaths: neat
          }).on('error', errorHandlers.errorCatcher)
      )
      .pipe($.autoprefixer(
          {
            browsers: ['last 3 versions']
          })
      )
      .pipe($.combineMq({
                          beautify: $.util.env.type === 'development'
                        }))
      .pipe($.util.env.type === 'development' ? $.util.noop() : $.csso())
      .pipe($.size())
      .pipe(gulp.dest(`${paths.dest}/css`))
      .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});

