

var myImage = document.querySelector( ".about-img" );
var offset=400;

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


//when page scrolls near  about section animation of about image dropping down starts
$(window).scroll(function() {
    if($('#about').offset().top < $(window).scrollTop() +offset)
    {
          // alert('visible');
          myImage.classList.remove( "hidden" );
          myImage.classList.add( "about-dropdown" );
    }
});
