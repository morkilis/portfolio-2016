"use strict";
var gulp = require('gulp');

gulp.task('build:watch', function () {
  let runSequence = require('run-sequence');
  let gutil = require('gulp-util');
  gutil.env.watch = true;
  runSequence('build', 'watch');
});



