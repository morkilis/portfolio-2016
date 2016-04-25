"use strict";
const Marionette = require('backbone.marionette');
const moment = require('moment');
const weather = require('simpleweather');


const pageToName = {
  "index": "About me"
  , "artificial-art": "Selected Projects"
  , "20Days-20Nights": "Other Projects"
  , "aia-heritage-ball": "Other Projects"
  , "anti-alias-regular": "Selected Projects"
  , "boropark-laundromat": "Other Projects"
  , "draw-me-a-letter": "Selected Projects"
  , "drawings": "Other Projects"
  , "edge-of-sight": "Other Projects"
  , "exquisite-corpse": "Other Projects"
  , "free-culture-manifesto": "Other Projects"
  , "from-birds-to-rooftops": "Other Projects"
  , "future-of-printed-book": "Other Projects"
  , "nothing-anywhere": "Other Projects"
  , "NYC-philharmonic": "Other Projects"
  , "ourtype": "Other Projects"
  , "paintings": "Other Projects"
  , "someones-story": "Other Projects"
  , "sound-walk": "Other Projects"
  , "springtime": "Other Projects"
  , "teabox": "Other Projects"
  , "wiki-book": "Other Projects"
};

function getCurrentPage() {
  const htmlPage = window.location.pathname.split("/")[2] || "index.html";
  return htmlPage.split(".html")[0];
}



const OtherFeatured = Marionette.ItemView.extend(
    {
      template: false,
      el: "section.other-featured",
      ui: { 
        'all-featured': '.four-columns'
      },
      onRender: function() {
        console.log(getCurrentPage());

      }
    }
);

module.exports = OtherFeatured;
