"use strict";
var Backbone = require('backbone');
Backbone.$ = $;
const Marionette = require('backbone.marionette');
const FeaturedComponents = require('./components/featured_to_render');

class Featured extends Marionette.ItemView {
  get template() { return false }

  onRender() {
    const featuredComponents = new FeaturedComponents();

    featuredComponents.render();
  }
}

const featured = new Featured();

featured.render();

module.exports = Featured;
