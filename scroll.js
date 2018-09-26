/* global $ */

$(window).on("scroll", function($) {
  if ($(this).scrollTop() > 200) {
    $('.floating').fadeIn(1000);
  } else {
    $('.floating').fadeOut(1000);
  }
});

$('.floating').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1500);
  return false;
});



$(window).on("scroll", function($) {
  if ($(this).scrollTop() > 600) {
    $('header').fadeIn(1000);
  } else {
    $('header').fadeOut(1000);
  }
});