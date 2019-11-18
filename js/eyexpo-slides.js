// calling the carousel slides in amorphous page

  $(document).ready(function() {

    $('.gd-slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.gd-slides-nav'
  });

  $('.gd-slides-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.gd-slides',
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 10000,
   focusOnSelect: true
  });

  $('.sketchup-slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sketchup-slides-nav'
});

$('.sketchup-slides-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.sketchup-slides',
 centerMode: true,
 autoplay: true,
 autoplaySpeed: 10000,
 focusOnSelect: true
});

  });
