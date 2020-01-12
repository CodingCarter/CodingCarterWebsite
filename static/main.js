document.addEventListener('DOMContentLoaded', function() {
  
  let nav = document.querySelector('nav .nav-links'); 
  
  function toggleNavLinks() {
    
    if (nav.style.display !== 'none' && nav.style.display !== '') {
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

});