/* @flow */
'use strict';
var Backbone = require('backbone');
Backbone.$ = $;
var IndexView = require('./index_page/index_page_view');

$(document).ready(function () {
  var landingPageLayout = new IndexView();
  landingPageLayout.render();
});
