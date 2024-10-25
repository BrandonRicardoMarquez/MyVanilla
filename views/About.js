import { Header } from '../components/Header.js';
import { Table } from '../components/Table/Table.js';

export function About() {
  const container = document.createElement('div');
  
  // Agregar el Header
  container.appendChild(Header("adios"));
  
  container.classList.add('about-page', 'p-6');
  
  // Crear el título y párrafo de la página "About"
  const title = document.createElement('h2');
  title.classList.add('text-2xl', 'font-bold');
  title.textContent = 'Acerca de';
  
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Esta es la página de Acerca de nosotros.';
  
  const users = [
    { name: 'Juan Pérez', age: 25 },
    { name: 'Ana Gómez', age: 30 },
    { name: 'Carlos Ruiz', age: 22 }
  ];

  container.appendChild(Table(users, true));
  
  // Añadir el título y el párrafo al contenedor
  container.appendChild(title);
  container.appendChild(paragraph);
  
  return container;
}
