$(document).scroll(function() {
  if ($(document).scrollTop() > $('.full-page').height() / 1000)
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
$(".vkon").on("click", function () {
  window.open('https://vk.com/computergu_ru');
});
$(".gotomap").on("click", function () {
  window.open('https://yandex.ru/maps/?um=constructor%3A28de0a21feac13cec81f741bc600717d0586d26a5eb45cc161128217d8f49a42&source=constructorLink');
});
$(".otziv").on("click", function () {
  window.open('https://vk.com/topic-202883459_47141414');
});
