import { Home } from './views/Home.js';
import { About } from './views/About.js';  // Una nueva página

function router() {
  const app = document.getElementById('app');
  app.innerHTML = '';  // Limpia el contenedor

  // Verifica el hash de la URL para cargar la página correspondiente
  const route = window.location.hash;

  if (route === '#about') {
    app.appendChild(About());
  } else {
    app.appendChild(Home());  // Carga la página por defecto (Home)
  }
}

// Escucha los cambios en el hash de la URL
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
