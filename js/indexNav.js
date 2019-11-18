// when user scroll near the end of the hero section in index
// which is the window height, top nav changes style

'use strict';
// var nameofVariable= object.property
window.innerWidth;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var navDefault = document.querySelector( "#nav-default" );
var stickyLogo = document.querySelector( "#sticky-logo" );
var resume = document.querySelector( "#resume" );

var width = document.documentElement.clientWidth;


// if window is already less than 414 px, remove resume section
if ( width < 414 ) {
  console.log( "Window width is less than 414px, hiding resume nav link" );
 resume.classList.add( "hidden" );
};

//add in resume nav link if window is wider than 414px
if ( width > 414 ) {
 resume.classList.remove( "hidden" );
};

//upon resizing remove resume nav link if window is less than 414px,
// add it back in if window is larger
window.addEventListener( "resize", function() {
    var width = document.documentElement.clientWidth;
    if ( width < 414 ) {
    console.log( "Window width is less than 414px, hiding resume nav link" );
   resume.classList.add( "hidden" );

 }else if ( windowWidth > 414 ){
   console.log( "Window width is more than 414px, adding resume nav link");
   resume.classList.remove( "hidden" );
  }
});


window.addEventListener('scroll', function() {
  var lastYPos = window.scrollY;
  var x = document.querySelectorAll(".hero-link");
  var i;
  // console.log( lastYPos );

  if(lastYPos> windowHeight-150){
    navDefault.classList.remove("our-blue");
    stickyLogo.style.opacity = "0";
    stickyLogo.style.opacity = "0.8";


    for (i = 0; i < x.length; i++) {
        x[i].style.color = "grey";
    }

  }else{
    navDefault.classList.add("our-blue");
    stickyLogo.style.opacity = "0";


    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }


  }
});
