'use strict';
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

exports.errorCatcher = function(params) {
  params = params || {};
  params.errorHandler = params.errorHandler || notify.onError("Error: <%= error.message %>");
  return plumber(params);
};