
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active'); // Toggle the display of the nav links
}

ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: false,
  interval: 200
});