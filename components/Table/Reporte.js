//exportame la funcion Reporte
export function Reporte() {
    // Creo una tabla dinámica para pintar los datos: Usuario, Edad y Acción
    const table = document.createElement('table');
    table.classList.add('w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-500', 'dark:text-gray-400', 'shadow-md', 'sm:rounded-lg');

    // Creo el thead
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    
    const th1 = document.createElement('th');
    th1.textContent = 'Usuario';
    th1.classList.add('px-6', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-50', 'dark:bg-gray-700', 'dark:text-gray-400');
    
    const th2 = document.createElement('th');
    th2.textContent = 'Edad';
    th2.classList.add('px-6', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-50', 'dark:bg-gray-700', 'dark:text-gray-400');
    
    const th3 = document.createElement('th');
    th3.textContent = 'Action';
    th3.classList.add('px-6', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-50', 'dark:bg-gray-700', 'dark:text-gray-400');
    
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

    // Creo el tbody
    const tbody = document.createElement('tbody');
    tbody.classList.add('bg-white', 'divide-y', 'divide-gray-200', 'dark:divide-gray-700');
    
    const users = [
        { name: 'Juan Pérez', age: 25 },
        { name: 'Ana Gómez', age: 30 },
        { name: 'Carlos Ruiz', age: 22 }
      ];
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.classList.add('odd:bg-white', 'odd:dark:bg-gray-900', 'even:bg-gray-50', 'even:dark:bg-gray-800', 'border-b', 'dark:border-gray-700');

        const td1 = document.createElement('td');
        td1.textContent = user.name;
        td1.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');

        const td2 = document.createElement('td');
        td2.textContent = user.age;
        td2.classList.add('px-6', 'py-4');
        
        const td3 = document.createElement('td');
        const editLink = document.createElement('a');
        editLink.textContent = 'Edit';
        editLink.href = '#';
        editLink.classList.add('font-medium', 'text-blue-600', 'dark:text-blue-500', 'hover:underline');
        td3.appendChild(editLink);
        td3.classList.add('px-6', 'py-4');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    );
    table.appendChild(tbody);
    return table;
}