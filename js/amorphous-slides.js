// calling the carousel slides in amorphous page

  $(document).ready(function() {

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
   autoplaySpeed: 10000,
   focusOnSelect: true
  });

  $('.environment-slides', ).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.environment-slides-nav'
  });

  $('.environment-slides-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.environment-slides',
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 10000,

   focusOnSelect: true
  });

  $('.model-slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.model-slides-nav'
  });

  $('.model-slides-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.model-slides',
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 10000,

   focusOnSelect: true
  });

  });
