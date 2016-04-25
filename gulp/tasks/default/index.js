"use strict";
var gulp = require('gulp');


gulp.task('default', function (cb) {
  var gutil = require('gulp-util');
  var runSequence = require('run-sequence');

  gutil.env.watch = gutil.env.type === "development";
  runSequence(`build${gutil.env.watch ? ":watch" : ""}`, cb);
});
