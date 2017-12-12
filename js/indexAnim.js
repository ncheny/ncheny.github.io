var myImage = document.querySelector( ".about-img" );

var offset=200;
// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

$(window).scroll(function() {
    if($('#about').offset().top < $(window).scrollTop() +400)
    {
          // alert('visible');
          myImage.classList.remove( "hidden" );
          myImage.classList.add( "about-dropdown" );
    }
});
