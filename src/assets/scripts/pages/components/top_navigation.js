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

function bindCurrentTime(el) {
  el.text(moment().format("HH:mmA"))
}

function setAddress(el, cb) {
  $.ajax({
           url: '//freegeoip.net/json/',
           type: 'POST',
           dataType: 'jsonp',
           success: function(location) {
             el.text(location.city);
             cb(location.city);
           }
         });
}


function getCurrentPage() {
  const htmlPage = window.location.pathname.split("/")[2] || "index.html";
  return htmlPage.split(".html")[0];
}



const TopNavigation = Marionette.ItemView.extend(
    {
      template: false,
      el: ".top-navigation-container",
      ui: {
        'topNavigationCurrentTime': '.current-time',
        'currentLocation': '.current-location',
        'currentWeather': '.current-weather',
        'currentSection': '.current-section'
      },
      onRender: function() {
        setAddress(this.ui.currentLocation, this._setWeather.bind(this));
        setInterval(bindCurrentTime.bind(this, this.ui.topNavigationCurrentTime), 500);
        this._setPageName(getCurrentPage())
        $(window).scroll(()=> {
          this.didScroll = true;
        });
        setInterval(() => {
          if (this.didScroll) {
            this._hasScroller();
            this.didScroll = false;
          }
        }, 250);
        setInterval(()=> {this._show()}, 1200)

      },
      _setPageName: function(page) {
        const name = pageToName[page];
        this.ui.currentSection.text(name);
      },
      _setWeather: function(city) {
        $.simpleWeather({
                          location: city,
                          woeid: '',
                          unit: 'f',
                          success: (weather) => {
                            this.ui.currentWeather.text(`${weather.temp}ºF`);
                            this._show();
                          }
                        })
      },
      _show: function() {
        if (!this.didScroll) {
          this.$el.removeClass("folded-up")
        }
      },
      _hide: function() {
        this.$el.addClass("folded-up")
      },
      _hasScroller: function() {
        var st = $(window).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(this.lastScrollTop - st) <= 20) {
          return;
        }

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > this.lastScrollTop && st > 20) {
          this._hide();
        } else {
          if (st + $(window).height() < $(document).height()) {
            this._show();
          }
        }

        this.lastScrollTop = st;
      }
    }
);

module.exports = TopNavigation;
