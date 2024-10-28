export function analisis (usera,makeAlert){
    const table = document.createElement('table');
    table.classList.add('w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-500', 'dark:text-gray-400', 'shadow-md', 'sm:rounded-lg');

    // Creo el thead
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    const th1 = document.createElement('thead');
    th1.textContent = 'Nombre';
    th1.classList.add('px-4', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-40', 'dark:bg-gray-500', 'dark:text-gray-300');

    const th2 = document.createElement('th');
    th2.textContent = 'Estatura';
    th2.classList.add('px-4', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-40', 'dark:bg-gray-500', 'dark:text-gray-300');
    
    const th3 = document.createElement('th');
    th3.textContent = 'Peso';
    th3.classList.add('px-4', 'py-3', 'text-xs', 'text-gray-700', 'uppercase', 'bg-gray-40', 'dark:bg-gray-500', 'dark:text-gray-300');

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

    //crea tbody de la tabla
    const tbody = document.createElement('tbody');
    tbody.classList.add('bg-white', 'divide-y', 'divide-gray-200', 'dark:divide-gray-700');

    usera.forEach(client => {
        const tr = document.createElement('tr');
        tr.classList.add('odd:bg-white', 'odd:dark:bg-gray-900', 'even:bg-gray-50', 'even:dark:bg-gray-800', 'border-b', 'dark:border-gray-700');

        const td1 = document.createElement('td');
        td1.textContent = client.name;
        td1.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');

        const td2 = document.createElement('td');
        td2.textContent = client.estatura;
        td2.classList.add('px-6', 'py-4');

        const td3 = document.createElement('td');
        const obtenerpeso = document.createElement('button');
        obtenerpeso.textContent = 'peso';
        obtenerpeso.onclick = () => {
            makeAlert(client.peso + " kg" );
        }
        obtenerpeso.classList.add('font-medium', 'text-blue-600', 'dark:text-blue-500', 'hover:underline');
        td3.appendChild(obtenerpeso);
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