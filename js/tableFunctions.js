const drawTable = () => {
    const books = JSON.parse(localStorage.getItem('books')) ?? [];
    const bookItems = document.getElementById('book-items');
    const booksCounter = document.getElementById('books-counter')

    bookItems.innerHTML = `<tr class="styled-tr">`;
    books.forEach((e, index) => {
       bookItems.innerHTML +=
       `
            <tr class="styled-tr">
                <td class="styled-td">${e.name}</td>
                <td class="styled-td">${e.author}</td>
                <td class="styled-td">${e.priority}</td>
                <td class="styled-td">${e.category}</td>
                <td class="styled-td styled-td-action">
                    <img alt="del" src="img/delete-icon.svg" class="icon-style" onclick="deleteBook(${index})">
                </td>
            </tr>
       `
    });

    booksCounter.innerText = books.length.toString();
}


drawTable();
