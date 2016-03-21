"use strict";
var gulp = require('gulp');

gulp.task('pages', function() {
  const errorCatcher = require('../../helpers/errors');
  const browserSync = require('../../helpers/browser_sync');
  const $ = require('gulp-load-plugins')();
  const path = require('path');

  const paths = require('../paths');
  const srcPath = [`${paths.src.pages}/*.jade`, `${paths.src.pages}/projects/*.jade`];
  return gulp.src(srcPath)
      .pipe(errorCatcher.errorCatcher())
      .pipe($.jade())
      .pipe($.util.env.type === 'production' ? $.htmlmin({
                                                           removeComments: false,
                                                           collapseWhitespace: true,
                                                           conservativeCollapse: true,
                                                           preserveLineBreaks: true,
                                                           collapseBooleanAttributes: true,
                                                           removeRedundantAttributes: true,
                                                           removeAttributeQuotes: true,
                                                           useShortDoctype: true,
                                                           removeScriptTypeAttributes: true,
                                                           removeStyleLinkTypeAttributes: true,
                                                           removeIgnored: true
                                                         }) : $.util.noop())
      .pipe(gulp.dest((file)=> {
        const relativePath = path.relative(paths.src.pages, path.dirname(file.path));
        return path.join(paths.dest, relativePath);
      }))
      .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});
