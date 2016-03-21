'use strict';
var gulp = require('gulp');

gulp.task('assets:icons', function() {
  let paths = require('../../paths');
  let errorCatcher = require('../../../helpers/errors');
  let browserSync = require('../../../helpers/browser_sync');
  let $ = require('gulp-load-plugins')();

  let srcPath = `${paths.src.icons}/**/*.*`;

  const FONT_NAME = 'jaco-custom-font';
  return gulp.src(srcPath)
      .pipe(errorCatcher.errorCatcher())
      .pipe($.iconfont({
                         fontName: FONT_NAME,
                         prependUnicode: true, // recommended option
                         formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
                         normalize: true,
                         fontHeight: 1001,
                         timestamp: Math.round(Date.now() / 1000) // recommended to get consistent builds when watching files
                       }))
      .on('glyphs', function(glyphs) {
        return gulp.src(require('path').resolve('./gulp/tasks/assets/icons/template.css.erb'))
            .pipe($.consolidate('lodash', {
              glyphs: glyphs,
              fontName: FONT_NAME,
              fontPath: `/fonts/${FONT_NAME}/`,
              className: 'icon'
            }))
            .pipe($.util.env.type === 'development' ? $.util.noop() : $.csso())
            .pipe($.rename(`${FONT_NAME}.css`))
            .pipe(gulp.dest(`${paths.dest}/css/common`))
      })
      .pipe(gulp.dest(`${paths.dest}/fonts/jaco-custom-font`))
      .pipe($.util.env.watch ? browserSync.stream() : $.util.noop());
});
