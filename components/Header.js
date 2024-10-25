export function Header(title = "Mi app") {
  const header = document.createElement('header');
  header.classList.add('bg-blue-600', 'text-white', 'p-4', 'flex', 'justify-between');
  header.innerHTML = `
    <h1 class="text-2xl font-bold">${title}</h1>
    <nav>
      <a href="#home" class="text-white hover:underline mx-2">Inicio</a>
      <a href="#about" class="text-white hover:underline mx-2">Acerca de</a>
    </nav>
  `;
  return header;
}
