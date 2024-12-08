const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  document.getElementById('projects-section').classList.add('active');
  document.querySelector('[data-target="projects-section"]').classList.add('active');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.target;
      
     
      const targetSection = document.getElementById(target);
      if (targetSection) {
        
        sections.forEach(section => {
          section.classList.remove('active');
        });

        
        targetSection.classList.add('active');
        
        
        navItems.forEach(navItem => {
          navItem.classList.remove('active');
        });

        
        item.classList.add('active');
      } else {
        console.error(`La sección con el ID ${target} no se encontró.`);
      }
    });
  });