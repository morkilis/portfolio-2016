"use strict";
const Backbone = require('backbone');
const Marionette = require('backbone.marionette');
const app = new Marionette.Application();

// Start history when our application is ready
app.on('start', function() {
  Backbone.history.start();
  console.log("app started");
});

// Load some initial data, and then start our application
app.start();

window.app = app;
