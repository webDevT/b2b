$(function(){

$('.slider').slick({
	prevArrow: $('.prev'),
nextArrow: $('.next'),
});
  // ------start scroll menu---
$(".button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 // ------end scroll menu---

});