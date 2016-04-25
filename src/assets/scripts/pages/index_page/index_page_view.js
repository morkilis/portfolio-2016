'use strict';
const BaseView = require('../base_view');


const IndexPageView = BaseView.extend(
    {
      el: 'main.index-page',
      onRender: function(){
        var maurann = $('.maurann-name-audio')[0];
        $('.maurann-name').mouseenter(function() {
          maurann.play();
          $(this).addClass('active');
          setTimeout(function() {
            $('.maurann-name').removeClass('active');
          }, 350);
        });
      }

    }
);

module.exports = IndexPageView;
