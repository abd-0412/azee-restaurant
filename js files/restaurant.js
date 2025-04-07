// menu-section
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-items');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            menuItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// header-section
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.navigate-btns');
    if (menuIcon && navMenu) {
      menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
          this.classList.replace('bx-menu', 'bx-x');
          document.body.style.overflow = 'hidden';
        } else {
          this.classList.replace('bx-x', 'bx-menu');
          document.body.style.overflow = '';
        }
      });
      const navLinks = document.querySelectorAll('.nav-links .links a, .mobile-login');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          menuIcon.classList.replace('bx-x', 'bx-menu');
          document.body.style.overflow = '';
        });
      });
    }
  });