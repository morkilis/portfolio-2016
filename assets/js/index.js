"use strict";
var medium;

$(document).ready(function(){
  var maurann = $("#maurann-mp3")[0];
  $('#maurann').mouseenter(function() {
    maurann.play();
    $(this).addClass('active');
    setTimeout(function() {
        $('#maurann').removeClass('active');
     }, 350);
  });

  $('#projects')
  .append('<article>\
        <ul>\
          <li>\
            <a href=\"./aia-heritage-ball\">+&nbsp;&nbsp;AIA Heritage Ball</a>\
            <span>\
              <a class=\"branding\">branding</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./boropark-laundromat\">+&nbsp;&nbsp;Boropark Laundromat</a>\
            <span>\
              <a class=\"website\">website</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./ourtype\">+&nbsp;&nbsp;Ourtype</a>\
            <span>\
              <a class=\"typography\">typography</a>, <a class=\"website\">website</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./20Days-20Nights\">+&nbsp;&nbsp;20 Days & 20 Nights</a>\
            <span>\
              <a class=\"website\">website</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./teabox\">+&nbsp;&nbsp;Teabox</a>\
            <span>\
              <a class=\"branding\">branding</a>, <a class=\"packaging\">packaging</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./NYC-philharmonic\">+&nbsp;&nbsp;NYC Philharmonic Open Rehearsals</a>\
            <span>\
              <a class=\"poster\">poster</a>, <a class=\"interactive-print\">interactive print</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./edge-of-sight\">+&nbsp;&nbsp;At the Edge of Sight</a>\
            <span>\
              <a class=\"book\">book</a>, <a class=\"typography\">typography</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./springtime\">+&nbsp;&nbsp;How Do You Know it’s Springtime?</a>\
            <span>\
              <a class=\"poster\">poster</a>, <a class=\"illustration\">illustration</a>, <a class=\"lithography\">lithography</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./free-culture-manifesto\">+&nbsp;&nbsp;Free Culture Manifesto</a>\
            <span>\
              <a class=\"typography\">typography</a>, <a class=\"interactive-print\">interactive print</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./sound-walk\">+&nbsp;&nbsp;Sound Walk</a>\
            <span>\
              <a class=\"book\">book</a>, <a class=\"interactive-print\">interactive print</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./nothing-anywhere\">+&nbsp;&nbsp;Nothing Anywhere album cover</a>\
            <span>\
              <a class=\"illustration\">illustraion</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./future-of-printed-book\">+&nbsp;&nbsp;Is there a future for printed book design?</a>\
            <span>\
              <a class=\"poster\">poster</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./wiki-book\">+&nbsp;&nbsp;Wikipedia Book</a>\
            <span>\
              <a class=\"book\">book</a>, <a class=\"typography\">typography</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./someones-story\">+&nbsp;&nbsp;Someone’s Story</a>\
            <span>\
              <a class=\"book\">book</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./from-birds-to-rooftops\">+&nbsp;&nbsp;Moving from the Matter of Birds to the Matter of Rooftops</a>\
            <span>\
              <a class=\"animation\">stopmotion animation</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./drawings\">+&nbsp;&nbsp;Drawings</a>\
            <span>\
              <a class=\"art\">art</a>\
            </span>\
          </li>\
          <li>\
            <a href=\"./paintings\">+&nbsp;&nbsp;Paintings</a>\
            <span>\
              <a class=\"art\">art</a>\
            </span>\
          </li>\
        </ul>\
      </article>');
  
    $('main').after('<footer>\
    <div>\
      <article>\
        <p>\
          <a href=\"mailto:maurannstein@gmail.com?Subject=Hello!\">maurannstein@gmail.com</a>\
        </p>\
        <p>© 2016</p>\
      </article>\
    </div>\
  </footer>');

    $('.all-other span > a').mouseenter(function(){
    var thisClass = $(this).attr('class');
    medium = "."+thisClass;

    $(medium).addClass('similar-media');
    $(medium).parent().siblings().addClass('similar-media');

    $('.similar-media').mouseleave(function() {
      $(medium).removeClass('similar-media');
      $(medium).parent().siblings().removeClass('similar-media');
    });  
  });

  $('#skipTo').click(function(){
     var vid = document.getElementById("ec-vid");
     vid.pause();
     vid.currentTime = 111;
     vid.play();
   });
});