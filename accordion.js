/* global $ */

$(function() {
  $('.menu-tab').hover(function() {
    var $menu = $(this).find('.menu-tab-contents');
    if($menu.hasClass('open')) {
      $menu.removeClass('open');
      $menu.slideUp();
      $(this).find('.menu-tab-btn').text("≡");
    } else {
      $menu.addClass('open'); 
      $menu.slideDown();
      $(this).find('.menu-tab-btn').text("|");
    }
  });
});