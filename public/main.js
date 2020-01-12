
function javascriptCode() {

// Navigation Bar hide/show
function toggleNavLinks() {
  var nav = document.querySelector('.nav-links');
  
  if (window.getComputedStyle(nav).display !== 'none') {
    nav.style.opacity = 0;
    setTimeout(function() {
      nav.style.opacity = 0;
      nav.style.display = 'none';
      
    }, 501);
  } else {
    nav.style.display = 'flex';
    setTimeout(function() {
      nav.style.opacity = 1;
    }, 1);
    
  }
}

document.querySelector('.menu-icon').addEventListener('click', toggleNavLinks);

// Scroll Indicator for Posts
var scrollIndicatorElement =  document.getElementById('scroll-indicator');
if (typeof(scrollIndicatorElement) != 'undefined' && scrollIndicatorElement != null) {
  window.onscroll = function() {scrollIndicator()};

  function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    scrollIndicatorElement.style.width = scrolled + "%";
  }
}

}

var ran = false;
document.addEventListener('DOMContentLoaded', () => {javascriptCode(); ran = true;});

document.addEventListener('load', function() {
  if (ran !== true) {
    javascriptCode();
    ran = true;
  }
});

window.onload = function() {
  if (ran !== true) {
    javascriptCode();
    ran = true;
  }
}