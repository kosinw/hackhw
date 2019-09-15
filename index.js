// Scroll certain amounts from current position 
window.scroll({ 
  top: 50, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

footer_title.addEventListener('click', function() {
    document.querySelector('.hero').scrollIntoView({ 
        behavior: 'smooth' 
      });
})