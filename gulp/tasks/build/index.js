"use strict";
let gulp = require('gulp');

gulp.task('build', ['bower', 'clean'], function(cb) {
  let runSequence = require('run-sequence');
  return runSequence([
                       'pages'
                       , 'assets:css'
                       , 'assets:images-no-smoosh'
                       , 'assets:images'
                       , 'assets:fonts'
                       , 'assets:icons'
                       , 'assets:scripts'
                       , 'assets:videos'
                       , 'assets:music'
                     ]
      , 'rev'
      , 'smoosh'
      , cb);

});
