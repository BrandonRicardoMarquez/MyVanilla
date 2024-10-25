export function UserCard(name, age) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'm-4', 'w-60');
  card.innerHTML = `
    <h2 class="text-xl font-semibold">${name}</h2>
    <p class="text-gray-700">Edad: ${age}</p>
  `;
  return card;
}
