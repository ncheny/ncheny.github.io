'use strict';
// var nameofVariable= object.property
window.innerWidth;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var navDefault = document.querySelector( "#nav-default" );
var stickyLogo = document.querySelector( "#sticky-logo" );


window.addEventListener('scroll', function() {
  var lastYPos = window.scrollY;
  var x = document.querySelectorAll(".hero-link");
  var i;
  // console.log( lastYPos );

  if(lastYPos> windowHeight-150){
    navDefault.classList.remove("our-pink");
    stickyLogo.style.opacity = "0";
    stickyLogo.style.opacity = "0.8";


    for (i = 0; i < x.length; i++) {
        x[i].style.color = "grey";
    }

  }else{
    navDefault.classList.add("our-pink");
    stickyLogo.style.opacity = "0";


    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }


  }
});
