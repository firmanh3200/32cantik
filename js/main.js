document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav') && !e.target.closest('.menu-toggle')) {
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Enhanced dropdown menu functionality
  const handleDropdowns = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    let activeDropdown = null;
    const isMobile = () => window.innerWidth <= 968;

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
        activeDropdown = null;
      }
    });

    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      
      // Handle mouse hover (desktop only)
      if (!isMobile()) {
        dropdown.addEventListener('mouseenter', () => {
          if (activeDropdown && activeDropdown !== dropdown) {
            activeDropdown.classList.remove('active');
          }
          dropdown.classList.add('active');
          activeDropdown = dropdown;
        });

        dropdown.addEventListener('mouseleave', () => {
          if (!dropdown.classList.contains('clicked')) {
            dropdown.classList.remove('active');
            activeDropdown = null;
          }
        });
      }

      // Handle click
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (activeDropdown && activeDropdown !== dropdown) {
          activeDropdown.classList.remove('active');
          activeDropdown.classList.remove('clicked');
        }

        dropdown.classList.toggle('active');
        dropdown.classList.toggle('clicked');
        
        if (dropdown.classList.contains('active')) {
          activeDropdown = dropdown;
        } else {
          activeDropdown = null;
        }
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (isMobile()) {
        mainNav.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  };

  handleDropdowns();
});
