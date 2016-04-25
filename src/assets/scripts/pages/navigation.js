"use strict";
var Backbone = require('backbone');
Backbone.$ = $;
const Marionette = require('backbone.marionette');
const TopNavigation = require('./components/top_navigation');

class Navigation extends Marionette.ItemView {
  get template() { return false }

  onRender() {
    const topNavigation = new TopNavigation();
    topNavigation.render();
  }
}

const navigation = new Navigation();
navigation.render();

module.exports = Navigation;
