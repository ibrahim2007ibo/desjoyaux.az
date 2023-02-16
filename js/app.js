//  Carousel
$('.drop-menu').click(function(){
    $(this).find('.sub-menu').slideToggle();
});
$(".icon-block-lang").click(function () {
  $(".lang-dropdown").slideToggle(100);
  $(this).find('svg').toggleClass('lang-icon-rotate');
});
$(document).ready(function(){
    $('.slider-counter .total').html($('.carousel-item').length);
});
$('.slider').on('slid.bs.carousel', function() { 
	$('.slider-counter .current').html($('.carousel-inner .carousel-item.active').index() + 1);

});
 $('.faq-content b').click(function(){
  $(this).toggleClass('active');
   $(this).next('.quote').slideToggle();
 });
 $(document).ready(function(){
    $('.highslide').fancybox({
        loop : true
    });
    $('.highslide').attr('data-fancybox','gallery');
});
$('.partnyor-slider').owlCarousel({
    loop:true,
    autoplay: true,
    items:6,
    autoplayTimeout:4000,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    dots:false,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        991:{
            items:3
        },
        1200:{
            items:6
        }
    }
});
// $(window).scroll(function (event) {
//   var scroll = $(window).scrollTop();
//   if(scroll > 40){
//     $('.navbar-fixed').addClass('bg-black');
//   }
//   else{$('.navbar-fixed').removeClass('bg-black');}
// });
// $(document).ready(function(){
//   $('.refbackground').css('height',$('.refbackground').innerWidth());
// });
$('.navbar-toggler').click(function(){
  $('.input-checked').prop('checked',!$('.input-checked').prop("checked"));
  $('.navbar-menu').toggleClass('show');
  $('.navbar-menu .nav-link').toggleClass('fadeInUp animated');
});

$(document).ready(function(){
  var rightNnav = ($("body").outerWidth() - $(".line-cont").outerWidth())/2 - 14;
  $('.carousel-nav').css('right',rightNnav);
  var scroll = $(window).scrollTop();
  if(scroll > 40){
    $('.navbar-fixed').addClass('bg-fixed');
  }
  else{$('.navbar-fixed').removeClass('bg-fixed');}
});
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if(scroll > 40){
    $('.navbar-fixed').addClass('bg-fixed');
  }
  else{$('.navbar-fixed').removeClass('bg-fixed');}
});

$(".full-landing-image").ripples({
  resolution: 256,
  perturbance: 0.04,
 });
 $(".rip").ripples({
  resolution: 512,
  perturbance: 0.01,
 });
  $(".rip2").ripples({
  resolution: 512,
  perturbance: 0.01,
 });
 setInterval(function() {
	var $el = $('.rip, .rip2,.full-landing-image');
	var x = Math.random() * $el.outerWidth();
	var y = Math.random() * $el.outerHeight();
	var dropRadius = 20;
	var strength = 0.01 + Math.random() * 0.04;

	$el.ripples('drop', x, y, dropRadius, strength);
}, 3000);
