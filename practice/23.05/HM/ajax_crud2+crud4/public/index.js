const apiUrl = 'http://localhost:8001/books';
let page = 1;
const booksPerPage = 25;

async function getAllBooks() {
    try {
        const response = await axios.get(`${apiUrl}?_page=${page}&_per_page=${booksPerPage}`);

        // Check if the response contains data as an array or an object
        let books = [];
        if (Array.isArray(response.data)) {
            books = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
            books = response.data.data;
        } else {
            console.error('Invalid response format:', response.data);
            return;
        }

        // Update the table with the fetched books
        const tbody = document.querySelector('#booksTable tbody');
        tbody.innerHTML = ''; // Clear the table body before adding new rows
        books.forEach(book => {
            const row = `
            <tr>
              <td>${book.id}</td>
              <td>${book.name}</td>
              <td>${book.author}</td>
              <td>${book.numPages}</td>
            </tr>
            `;
            tbody.innerHTML += row;
        });

        // Disable the Next button if there are no more books to fetch
        document.getElementById('nextPageButton').disabled = books.length < booksPerPage;

        // Enable the Previous button only if we're past the first page
        document.getElementById('previousPageButton').disabled = page === 1;
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

function nextPage() {
    page++;
    getAllBooks();
}

function previousPage() {
    if (page > 1) {
        page--;
        getAllBooks();
    }
}

async function createBook(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('numPages').value;

    try {
        await axios.post(apiUrl, { name, author, numPages });
        document.getElementById('createBookForm').reset();
        page = 1; // Reset to the first page after creating a new book
        getAllBooks();
    } catch (error) {
        console.error('Error creating book:', error);
    }
}

async function deleteBook(event) {
    event.preventDefault();
    const bookId = document.getElementById('deleteBookId').value;

    try {
        await axios.delete(`${apiUrl}/${bookId}`);
        document.getElementById('deleteBookForm').reset();
        page = 1; // Reset to the first page after deleting a book
        getAllBooks();
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

async function updateBook(event) {
    event.preventDefault();
    const bookId = document.getElementById('updateBookId').value;
    const name = document.getElementById('updateName').value;
    const author = document.getElementById('updateAuthor').value;
    const numPages = document.getElementById('updateNumPages').value;

    try {
        await axios.put(`${apiUrl}/${bookId}`, { name, author, numPages });
        document.getElementById('updateBookForm').reset();
        page = 1; // Reset to the first page after updating a book
        getAllBooks();
    } catch (error) {
        console.error('Error updating book:', error);
    }
}

document.getElementById('createBookForm').addEventListener('submit', createBook);
document.getElementById('deleteBookForm').addEventListener('submit', deleteBook);
document.getElementById('updateBookForm').addEventListener('submit', updateBook);

