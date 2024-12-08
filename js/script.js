const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  // Inicializa la sección de "Proyectos" como activa al cargar la página
  document.getElementById('projects-section').classList.add('active');
  // Marca el navbar de "Proyectos" como activo al cargar la página
  document.querySelector('[data-target="projects-section"]').classList.add('active');

  // Agrega el evento de clic a los elementos de navegación (li)
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.target; // Obtiene el 'data-target' del <li>
      
      // Verifica si el ID del target existe
      const targetSection = document.getElementById(target);
      if (targetSection) {
        // Cambia las secciones activas
        sections.forEach(section => {
          section.classList.remove('active'); // Elimina la clase 'active' de todas las secciones
        });

        // Añade la clase 'active' a la sección seleccionada
        targetSection.classList.add('active');
        
        // Cambia el item activo del navbar
        navItems.forEach(navItem => {
          navItem.classList.remove('active'); // Elimina la clase 'active' de todos los items
        });

        // Añade la clase 'active' al item correspondiente
        item.classList.add('active');
      } else {
        console.error(`La sección con el ID ${target} no se encontró.`);
      }
    });
  });