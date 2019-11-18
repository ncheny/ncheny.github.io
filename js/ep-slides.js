// calling the carousel slides in amorphous page

  $(document).ready(function() {

    $('.ui-slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.ui-slides-nav'
  });

  $('.ui-slides-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.ui-slides',
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 10000,
   focusOnSelect: true
  });

  });
