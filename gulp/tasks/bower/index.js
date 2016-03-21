'use strict';
var gulp = require('gulp');

gulp.task('bower', function () {
  var bower = require('gulp-bower');
  return bower();
});