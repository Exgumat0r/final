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
$(function() {
  var $speed = 200;
  var $class = 'opened';
  var $class_open = '.faq-answer';

  $(document).ready(function() {
     $('.faq-question').on('click', function() {
       $ul = $(this).closest('ul');
       $answer = $(this).closest('li').find($class_open);

       if( !$(this).closest('li').hasClass($class) ) {

         $ul.find('li').each(function() {
           if( $(this).hasClass($class) )
             $(this).removeClass($class).find($class_open).slideUp($speed);
         });
       }

       $answer
         .slideToggle($speed)
         .closest('li')
         .toggleClass($class);
     });
  });
});
