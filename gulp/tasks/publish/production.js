'use strict';

let gulp = require('gulp');

gulp.task('publish:production', function () {
  let gutil = require('gulp-util');
  let runSequence = require('run-sequence');
  process.env.NODE_ENV='production';
  gutil.env.type = 'production'; //if there were only a nice way of doing this
  gutil.env.watch = false;

  return runSequence('build', 'upload_to_ftp:production');
});
