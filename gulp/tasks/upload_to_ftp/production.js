'use strict';
const gulp = require('gulp');

gulp.task('upload_to_ftp:production', function() {
  const ftp = require('vinyl-ftp');
  const $ = require('gulp-load-plugins')();

  const conn = ftp.create({
                            host: 'ftp.maurannstein.com',
                            user: process.env.FTP_USERNAME,
                            password: process.env.FTP_PASS,
                            parallel: 3,
                            log: $.util.log
                          });

  var globs = ['dist/**'];

  return gulp.src(globs, {base: 'dist/', buffer: false})
      .pipe(conn.newer('/public_html')) // only upload newer files
      .pipe(conn.dest('/public_html'));

});
