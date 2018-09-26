/* global jQuery */

jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 200) {
    jQuery('.floating').fadeIn(1000);
  } else {
    jQuery('.floating').fadeOut(1000);
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 1500);
  return false;
});



jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 600) {
    jQuery('header').fadeIn(1000);
  } else {
    jQuery('header').fadeOut(1000);
  }
});