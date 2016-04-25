"use strict";
const Marionette = require('backbone.marionette');

const BaseView = Marionette.ItemView.extend(
    {
      template: false
    }
);

module.exports = BaseView;
