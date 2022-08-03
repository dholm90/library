let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = new Boolean(read);

    this.info = function () {
        return title + author + pages + read;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const theHobbit = new Book('the hobbit', 'jrr', '295', true);
const theHobbit2 = new Book('the hobbit2', 'jrr', '295', false);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);

function displayLibrary(library) {
    library.forEach(book => {
        const bookContainer = document.querySelector('.books');
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookContainer.appendChild(bookCard);
    });
}
displayLibrary(myLibrary);

const btn = document.querySelector('#add-book');

btn.addEventListener('click', function (e) {
    const bookContainer = document.querySelector('.books');

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    const newBook = new Book(title, author, pages, read);
    if (title && author && pages) {
        bookContainer.innerHTML = "";
        addBookToLibrary(newBook);
        displayLibrary(myLibrary);
    }

});







