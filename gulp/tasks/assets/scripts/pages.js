'use strict';
var gulp = require('gulp');





gulp.task('assets:scripts:pages', function () {
  const gutil = require('gulp-util');
  const fs = require('fs');
  const path = require('path');
  const browserifyHelper = require('./helpers/watchify_helper.js');
  const paths = require('../../paths');
  const merge = require('merge-stream');


  var stream = merge();
  fs.readdir(`${paths.src.scripts}/pages/`, function(err, files) {
    if (err) {
      throw err;
    }
    files.map(function(file){
      return path.resolve(`${paths.src.scripts}/pages/`, file);
    }).filter(function(fullPath) {
      return fs.lstatSync(fullPath).isFile();
    }).forEach(function(fullPath){
      let file = path.basename(fullPath);
      let opts = {
        basedir: `${paths.base}`,
        fullPaths: false,
        entries: [fullPath],
        extensions: [],
        debug: gutil.env.type!=='production'
      };
      stream.add(browserifyHelper(file, `${paths.dest}/scripts/pages`, opts, gutil.env.watch));
    });
  });

  return stream;
});


