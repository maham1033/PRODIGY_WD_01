const header = document.querySelector('header');
const homeSection = document.querySelector('.home');
const headerHeight = header.clientHeight;

function toggleScrollHeader() {
  if (window.scrollY > homeSection.clientHeight - headerHeight) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', toggleScrollHeader);



const navLinks = document.querySelectorAll('.navbar a.nav-link');


function toggleScrollNav() {
  if (window.scrollY > homeSection.clientHeight - headerHeight) {
    header.classList.add('scroll-header');
    navLinks.forEach(link => link.classList.add('scroll-nav-link'));
  } else {
    header.classList.remove('scroll-header');
    navLinks.forEach(link => link.classList.remove('scroll-nav-link'));
  }
}

window.addEventListener('scroll', toggleScrollNav);

// Hover effect for navigation links
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (!header.classList.contains('scroll-header')) {
      link.classList.add('hover-nav-link');
    }
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover-nav-link');
  });
});
