$(document).scroll(function() {
  if ($(document).scrollTop() > $('.full-page').height() / 10)
  $(".hdr").addClass("fixed");
  else
    $(".hdr").removeClass("fixed");

});
$('.up-btn').on("click", function() {
  $("html, body").animate({
    scrollTop: 0

  }, 'slow');
});
$("#show-menu").on("click", function () {
  $("#hidden-menu").animate({
    "right": 0}, 500);
});
$("#hidden-menu .close").on("click", function () {
  $("#hidden-menu").animate({
    "right": -400}, 250);
});
$(".inst").on("click", function () {
  window.open('https://www.instagram.com/computergurumo/');
});
$(".gotoTov").on("click", function () {
  window.open('');
});
$(".vkon").on("click", function () {
  window.open('https://vk.com/computergu_ru');
});
$(".gotomap").on("click", function () {
  window.open('https://yandex.ru/maps/?um=constructor%3Ae3e34f497735710c4b2f002581589c400279e1becefef57441ca77748fd42391&source=constructorLink');
});
$(".otziv").on("click", function () {
  window.open('https://vk.com/topic-202883459_47141414');
});
