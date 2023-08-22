<script>
  // Function to toggle the mobile menu
  function toggleMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
  }

  // Add click event listener to the mobile menu button
  const mobileMenuButton = document.querySelector('.navbar-toggler');
  mobileMenuButton.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    });
  });

  // Add hover effect to card components
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-lg');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-lg');
    });
  });
</script>
