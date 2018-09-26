/* global $ */

$(function() {
  countDown1();
});

function countDown1() {
  var startDateTime = new Date();
  var endDateTime = new Date("December 31,2018 23:59:59");
  var left = endDateTime - startDateTime;
  var a_day = 24 *60 *60 *1000;
  
  var d = Math.floor(left/a_day)
  var h = Math.floor((left % a_day) / (60 * 60 * 1000))
  var m = Math.floor((left % a_day) / (60 * 1000)) % 60
  var s = Math.floor((left % a_day) / 1000) % 60 % 60
  
  $("#TimeLeft1").text(d + '日' + h + '時間' + m + '分' + s + '秒');
  setTimeout('countDown1()', 1000);
}



$(function() {
  countDown2();
});

function countDown2() {
  var startDateTime = new Date();
  var endDateTime = new Date("October 1,2019 00:00:00");
  var left = endDateTime - startDateTime;
  var a_day = 24 *60 *60 *1000;
  
  var d = Math.floor(left/a_day)
  var h = Math.floor((left % a_day) / (60 * 60 * 1000))
  var m = Math.floor((left % a_day) / (60 * 1000)) % 60
  var s = Math.floor((left % a_day) / 1000) % 60 % 60
  
  $("#TimeLeft2").text(d + '日' + h + '時間' + m + '分' + s + '秒');
  setTimeout('countDown2()', 1000);
}



$(function() {
  countDown3();
});

function countDown3() {
  var startDateTime = new Date();
  var endDateTime = new Date("April 1,2020 00:00:00");
  var left = endDateTime - startDateTime;
  var a_day = 24 *60 *60 *1000;
  
  var d = Math.floor(left/a_day)
  var h = Math.floor((left % a_day) / (60 * 60 * 1000))
  var m = Math.floor((left % a_day) / (60 * 1000)) % 60
  var s = Math.floor((left % a_day) / 1000) % 60 % 60
  
  $("#TimeLeft3").text(d + '日' + h + '時間' + m + '分' + s + '秒');
  setTimeout('countDown3()', 1000);
}