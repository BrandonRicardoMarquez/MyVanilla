import { Header } from '../components/Header.js';
import { UserCard } from '../components/UserCard.js';
import { Table} from '../components/Table/Table.js';
import { makeAlert } from '../components/Table/functions.js';
import { Reporte } from '../components/Table/Reporte.js'; 
import { analisis } from '../components/Table/analisis.js';

export function Home() {
  const container = document.createElement('div');
  container.classList.add('home-page', 'p-6');
  
  // Agregar el componente Header
  container.appendChild(Header("Hola"));
  
  // Lista de usuarios
  const users = [
    { name: 'Juan Pérez', age: 25 },
    { name: 'Ana Gómez', age: 30 },
    { name: 'Carlos Ruiz', age: 22 }
  ];

  const otherUsers = [
    { name: 'Juan Pérez', age: 19 },
    { name: 'Juan Gómez', age: 20 },
    { name: 'Lola Ruiz', age: 22 }
  ];

  const usera = [
    { name: 'Sage', estatura: 1.52 , peso: 241 },
    { name: 'Usa', estatura: 1.57 , peso: 165 },
    { name: 'Inukai', estatura: 1.65 ,  peso: 81 }
  ];

  // Agregar cada tarjeta de usuario
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4');

  
  users.forEach(user => {
    const card = UserCard(user.name, user.age);
    cardContainer.appendChild(card);
  });

  // usera.forEach (cliente => {
  //   const card = UserCard(cliente.name, cliente.estatura, cliente.peso );
  //   cardContainer.appendChild(card);
  // });

  container.appendChild(cardContainer);

  container.appendChild(Table(users, true, makeAlert));
  container.appendChild(Table(otherUsers, true, makeAlert));
  // cardContainer.appendChild(Reporte(users , true, makeAlert));
  cardContainer.appendChild(analisis(usera, makeAlert))

 


  return container;
}
