var gulp = require('gulp');

gulp.task('cdn:flush', function () {
  var cloudflare = require('gulp-cloudflare');
  return cloudflare({
    token : 'fafaed0a0dfd7cfa5c01330a90654acbc73db',
    email : 'itayadler@gmail.com',
    domain: 'getjaco.com'
  });
});

