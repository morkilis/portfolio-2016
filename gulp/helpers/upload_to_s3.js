'use strict';

function uploadToS3(bucketName, region) {
  let gulp = require('gulp');

  let awspublish = require('gulp-awspublish');
  let parallelize = require("concurrent-transform");
  let paths = require('../tasks/paths');
  let merge = require('merge-stream');

  let publisher = awspublish.create({
    region: region,
    params: {
      Bucket: bucketName
    }
  });
  let headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  let filesToCompress = `${paths.dest}/**/*.{js,css,html}`;
  let gzippedStream = gulp.src(filesToCompress).pipe(awspublish.gzip());
  let regularStream = gulp.src([`${paths.dest}/**/*.*`, `!${filesToCompress}`]);

  return merge(gzippedStream, regularStream)
    .pipe(parallelize(publisher.publish(headers), 20))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
}


exports.uploadToS3 = uploadToS3;