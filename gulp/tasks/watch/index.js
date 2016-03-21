'use strict';
const gulp = require('gulp');


gulp.task('watch', ['build', 'watch:_browser_sync_init'], function () {
  const watch = require('gulp-watch');
  const runSequence = require('run-sequence');
  const batch = require('gulp-batch');
  const gutil = require('gulp-util');

  const paths = require('../paths');
  gutil.env.watch = true;

  //PAGES
  watch(`${paths.src.views}/**/*.jade`, batch(function (events, done) {
    runSequence('pages', done);
  }));

  //CSS
  watch(`${paths.src.css}/**/*.*`, batch(function (events, done) {
    runSequence('assets:css', done);
  }));

  //FONTS
  watch(`${paths.src.fonts}/**/*.*`, batch(function (events, done) {
    runSequence('assets:fonts', done);
  }));

  //IMAGES
  watch(`${paths.src.images}/**/*.*`, batch(function (events, done) {
    runSequence('assets:images', done);
  }));


  //ICONS
  watch(`${paths.src.icons}/**/*.*`, batch(function (events, done) {
    runSequence('assets:icons', done);
  }));

  //VENDOR SCRIPTS
  watch(`${paths.src.scripts}/vendor/**/*.js`, batch(function (events, done) {
    runSequence('assets:scripts:vendor', done);
  }));

  //SCRIPTS
  watch([`${paths.src.scripts}/**/*.js`,`!${paths.src.scripts}/vendor/**/*.js`], batch(function(events, done){
    runSequence('assets:scripts:pages', done);
  }));

  //VIDEOS
  watch([`${paths.src.videos}/**/*.*`], batch(function(events, done){
    runSequence('assets:videos', done);
  }));
});

gulp.task('watch:_browser_sync_init', ['build'], function () {
  var paths = require('../paths');
  var browserSync = require('../../helpers/browser_sync');

  return browserSync.init({
    startPath: '/',
    server: {
      baseDir: paths.dest
    }
  });
});
