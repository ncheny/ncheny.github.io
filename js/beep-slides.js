// calling carousel slides in the beep page

$(document).ready(function() {
  // $('.concept-slides', ).slick({
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: 'linear'
  // });

  $('.concept-slides').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.concept-slides-nav'
});
$('.concept-slides-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.concept-slides',
 centerMode: true,
 autoplay: true,
 autoplaySpeed: 5000,

 focusOnSelect: true
});

});
