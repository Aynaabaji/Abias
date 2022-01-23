// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// })

// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// })


// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// })

// ============================== AOS plugin Librery ================
AOS.init();
// ============================== AOS plugin Librery ================


// $(window).scroll(function(){
//   if($(window).scrollTop() > 900){
//     $(".menufixing").addClass(".fixable-menu")
//   }
//   if($(window).scrollTop() <901){
//     $(".menufixing").removeClass(".fixable-menu")
//   }
// })


$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menufixing").addClass("fixable-menu")
  }
  else{
    $(".menufixing").removeClass("fixable-menu")
  }
})

$(window).scroll(function(){
  if($(window).scrollTop()>300){
    $('.normal-logo').addClass("normal-vanish")
  }
  else{
    $(".normal-logo").removeClass("normal-vanish")
  }
})

$(window).scroll(function(){
  if($(window).scrollTop()>300){
    $(".fix-logo").addClass("fix-logo-dekhano")
  }
  else{
    $(".fix-logo").removeClass("fix-logo-dekhano")
  }
})


$(".topend-div").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1500)
})


$(window).scroll(function(){
  if($(window).scrollTop()>700){
    $('.topend-div').fadeIn()
  }
  else{
    $(".topend-div").fadeOut()
  }
})






// ====== nav fixing and topend button ends =========




jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 25000,
  });
});

// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});


$('.port-up-slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
})

$(".port-down-slider").slick({
  prevArrow: '.prev-arrow',
  nextArrow: '.next-arrow',
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  slidesToShow: 3,
});


// ============== process part starts ==================
$('.process-graph .item1').mouseenter(function () {
  $('.process-graph .item1 .pura-div .boro-nicher-golla').css("background", "#CEBDF8")
  $('.process-graph .item1 .pura-div .choto-golla-nicher').css("background", "#CEBDF8")
  $('.process-graph .line').css("width", "12%")
  $('.on1').css("color","#BFA7F9")
})

$('.process-graph .item1').mouseleave(function () {
  $('.process-graph .item1 .pura-div .boro-nicher-golla').css("background", "transparent")
  $('.process-graph .item1 .pura-div .choto-golla-nicher').css("background", "transparent")
  $('.process-graph .line').css("width", "0")
  $('.on1').css("color","#000")
})


$('.process-graph .item2').mouseenter(function () {
  $('.process-graph .item1 .pura-div .boro-nicher-golla').css("background", "#CEBDF8")
  $('.process-graph .item1 .pura-div .choto-golla-nicher').css("background", "#CEBDF8")
  $('.process-graph .item2 .pura-div .boro-nicher-golla').css("background", "#CEBDF8")
  $('.process-graph .item2 .pura-div .choto-golla-nicher').css("background", "#CEBDF8")
  $('.process-graph .line').css("width", "37%")
  $('.on1').css("color","#BFA7F9")
  $('.on2').css("color","#BFA7F9")
})

$('.process-graph .item2').mouseleave(function () {
  $('.process-graph .item1 .pura-div .boro-nicher-golla').css("background", "transparent")
  $('.item1 .choto-golla-nicher').css("background", "transparent")
  $('.process-graph .item2 .pura-div .boro-nicher-golla').css("background", "transparent")
  $('.process-graph .item2 .pura-div .choto-golla-nicher').css("background", "transparent")
  $('.process-graph .line').css("width", "0")
  $('.on1').css("color","#000")
  $('.on2').css("color","#000")
})

$('.process-graph .item3').mouseenter(function () {
  $('.item1 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item1 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.item2 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item2 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.item3 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item3 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.process-graph .line').css("width", "63%")
  $('.on1').css("color","#BFA7F9")
  $('.on2').css("color","#BFA7F9")
  $('.on3').css("color","#BFA7F9")
})

$('.process-graph .item3').mouseleave(function () {
  $('.item1 .boro-nicher-golla').css("background", "transparent")
  $('.item1 .choto-golla-nicher').css("background", "transparent")
  $('.item2 .boro-nicher-golla').css("background", "transparent")
  $('.item2 .choto-golla-nicher').css("background", "transparent")
  $('.item3 .boro-nicher-golla').css("background", "transparent")
  $('.item3 .choto-golla-nicher').css("background", "transparent")
  $('.process-graph .line').css("width", "0")
  $('.on1').css("color","#000")
  $('.on2').css("color","#000")
  $('.on3').css("color","#000")
})

$('.process-graph .item4').mouseenter(function () {
  $('.item1 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item1 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.item2 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item2 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.item3 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item3 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.item4 .boro-nicher-golla').css("background", "#CEBDF8")
  $('.item4 .choto-golla-nicher').css("background", "#CEBDF8")
  $('.process-graph .line').css("width", "100%")
  $('.on1').css("color","#BFA7F9")
  $('.on2').css("color","#BFA7F9")
  $('.on3').css("color","#BFA7F9")
  $('.on4').css("color","#BFA7F9")
})

$('.process-graph .item4').mouseleave(function () {
  $('.item1 .boro-nicher-golla').css("background", "transparent")
  $('.item1 .choto-golla-nicher').css("background", "transparent")
  $('.item2 .boro-nicher-golla').css("background", "transparent")
  $('.item2 .choto-golla-nicher').css("background", "transparent")
  $('.item3 .boro-nicher-golla').css("background", "transparent")
  $('.item3 .choto-golla-nicher').css("background", "transparent") 
  $('.item4 .boro-nicher-golla').css("background", "transparent")
  $('.item4 .choto-golla-nicher').css("background", "transparent")
  $('.process-graph .line').css("width", "0")
  $('.on1').css("color","#000")
  $('.on2').css("color","#000")
  $('.on3').css("color","#000")
  $('.on4').css("color","#000")
})

// ============== process part ends ==================

// =============== tetimonial part starts ==============

$('.mix-top-slider').slick({
  fade:true,
  arrows:false,
  autoplay:true,
  asNavFor:'.lower-slider-test',
  speed:1000,
})


$('.lower-slider-test').slick({
  asNavFor:'.mix-top-slider',
  autoplay:true,
  slidesToShow:5,
  centerMode:true,
  centerPadding: "0",
  speed:1000,
  prevArrow:'.buton1',
  nextArrow:'.buton2',

})

// =============== tetimonial part ends ==============