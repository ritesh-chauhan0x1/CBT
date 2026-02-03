document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close menu on link click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    });
  });

  // Set active link based on current page
  const currentPage = window.location.pathname;
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (currentPage.includes(link.getAttribute('href').split('/').pop())) {
      link.classList.add('active');
    }
  });
});
