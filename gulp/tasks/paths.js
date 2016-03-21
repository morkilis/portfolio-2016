'use strict';

var path = require('path');
var views = path.resolve(__dirname, '..', '..', './src/views');
var assets = path.resolve(__dirname, '..', '..', './src/assets');
var dest = path.resolve(__dirname, '..', '..', './dist');

module.exports = {
  base: path.resolve(__dirname, '..', '..'),
  src: {
    views: views,
    pages: `${views}/pages`,
    css: `${assets}/css`,
    images: `${assets}/images`,
    imagesUncompressed: `${assets}/images-uncompressed`,
    videos: `${assets}/videos`,
    music: `${assets}/music`,
    fonts: `${assets}/fonts`,
    icons: `${assets}/icons`,
    scripts: `${assets}/scripts`
  },
  dest: dest
};

