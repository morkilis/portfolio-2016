"use strict";
const Marionette = require('backbone.marionette');
const moment = require('moment');
const weather = require('simpleweather');


const pageToName = {
  "index": " "
  , "artificial-art": "selected projects"
  , "20Days-20Nights": "other projects"
  , "aia-heritage-ball": "other projects"
  , "anti-alias-regular": "selected projects"
  , "boropark-laundromat": "other projects"
  , "draw-me-a-letter": "selected projects"
  , "drawings": "other projects"
  , "edge-of-sight": "other projects"
  , "exquisite-corpse": "other projects"
  , "free-culture-manifesto": "other projects"
  , "from-birds-to-rooftops": "other projects"
  , "future-of-printed-book": "other projects"
  , "nothing-anywhere": "other projects"
  , "NYC-philharmonic": "other projects"
  , "ourtype": "other projects"
  , "paintings": "other projects"
  , "someones-story": "other projects"
  , "sound-walk": "other projects"
  , "springtime": "other projects"
  , "teabox": "other projects"
  , "wiki-book": "other projects"
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
      el: ".nav-container",
      ui: {
        'topNavigationCurrentTime': '.current-time',
        'currentLocation': '.current-location',
        'currentWeather': '.current-weather',
        'currentSection': '.current-section > span'
      },
      onRender: function() {
        //setAddress(this.ui.currentLocation, this._setWeather.bind(this));
        //setInterval(bindCurrentTime.bind(this, this.ui.topNavigationCurrentTime), 500);
        this._setPageName(getCurrentPage())
        // $(window).scroll(()=> {
        //   this.didScroll = true;
        // });
        // setInterval(() => {
        //   if (this.didScroll) {
        //     this._hasScroller();
        //     this.didScroll = false;
        //   }
        // }, 250);
        //setInterval(()=> {this._show()}, 1200)

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
        if (Math.abs(this.lastScrollTop - st) <= 30) {
          return;
        }

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > this.lastScrollTop && st > 30) {
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
