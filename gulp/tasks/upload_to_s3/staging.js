'use strict';
var gulp = require('gulp');

gulp.task('upload_to_s3:staging', function(){
  let uploadToS3 = require('../../helpers/upload_to_s3').uploadToS3;
  return uploadToS3('landing.staging.getjaco.com', 'us-west-2');
});