/* global $ */

$(function() {
var h = $(window).height();

$('#main').css('display','none');

$('#loader-bg ,#loader').height(h).css('display','block'); 
});

$(window).load(function () {
  $('#loader-bg').delay(1000).fadeOut(2000); 
  $('#loader').delay(1000).fadeOut(1500); 
  $('#main').delay(3000).fadeIn(2000); 
});

$(document).ready(function() {
	$('#line').addClass('fullwidth');
})