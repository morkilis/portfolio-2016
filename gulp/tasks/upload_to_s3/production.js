'use strict';

var gulp = require('gulp');

gulp.task('upload_to_s3:production', function(){
  let uploadToS3 = require('../../helpers/upload_to_s3').uploadToS3;
  return uploadToS3('www.getjaco.com', 'us-west-2');
});