// Function to toggle the visibility of the navbar on small screens
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('myNavbar');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  
  // Function to toggle the navbar visibility
  function toggleNavbar() {
      if (navbar.style.display === 'none' || navbar.style.display === '') {
          navbar.style.display = 'block';
      } else {
          navbar.style.display = 'none';
      }
  }

  // Event listener to toggle the navbar on small screens
  sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
              toggleNavbar();
          }
      });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
