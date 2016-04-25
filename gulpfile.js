'use strict';
var gulp = require('gulp');
var requireDirectory = require('require-directory');
var gutil = require('gulp-util');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
gutil.env.type = process.env.NODE_ENV;
requireDirectory(module, './gulp/tasks');
