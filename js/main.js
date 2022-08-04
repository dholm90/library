let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return title + author + pages + read;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function removeBookFromLibrary(deleteBook) {
    myLibrary.splice(deleteBook, 1);
}

const theHobbit = new Book('the hobbit', 'jrr', '295', true);
const theHobbit2 = new Book('the hobbit2', 'jrr', '295', false);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);

function displayLibrary(library) {
    let counter = 0;
    library.forEach(book => {

        // DOM Element initialize
        const bookContainer = document.querySelector('.books');
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('button');
        const remove = document.createElement('button');

        // Counter for data-id

        remove.setAttribute('data-id', counter);
        counter += 1;

        // Add classes to elements
        remove.classList.add('remove');
        read.classList.add('readBook');

        // DOM Text Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        remove.textContent = "Delete";

        if (book.read == "true")
            read.textContent = "Read"
        else
            read.textContent = "Not Read"

        // Append DOM elements
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(remove);
        bookContainer.appendChild(bookCard);
    });
}

displayLibrary(myLibrary);

// Button Event Listener selectors
const addBookBtn = document.querySelector('#add-book');
const readBtn = document.querySelector('#read-btn');
let removeBtns = document.querySelectorAll('.remove');

// Add Book button event listener
addBookBtn.addEventListener('click', function (e) {
    const bookContainer = document.querySelector('.books');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read-btn').value;
    const newBook = new Book(title, author, pages, read);
    if (title && author && pages) {
        bookContainer.innerHTML = "";
        addBookToLibrary(newBook);
        displayLibrary(myLibrary);
    }
});

// Read book event listener
readBtn.addEventListener('click', function (e) {
    const read = document.getElementById('read-btn');
    const readValue = document.getElementById('read-btn').value;
    if (readValue !== "true") {
        this.value = "true";
        this.textContent = "Read"
    }
    else {
        this.value = "false";
        this.textContent = "Not Read"
    }
});

// Delete Book Event Listener
document.addEventListener('click', (e) => {
    const bookContainer = document.querySelector('.books');

    if (e.target.classList.contains('remove')) {
        removeBookFromLibrary(e.target.getAttribute('data-id'));
        bookContainer.innerHTML = "";
        displayLibrary(myLibrary);
        // console.table(myLibrary);
    }
    else if (e.target.classList.contains('readBook')) {
        console.log(e)
    }
})









