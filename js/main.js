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

function toggleRead(target) {
    const readValue = target.getAttribute('value');
    if (readValue !== "true") {
        target.setAttribute('value', 'true');
        target.textContent = "Read"
        // this.textContent = "Read"
    }
    else {
        target.setAttribute('value', 'false')
        target.textContent = "Not Read"
    }

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
        read.setAttribute('data-id', counter)
        counter += 1;

        // Add classes to elements
        remove.classList.add('remove');
        read.classList.add('readBook');

        read.value = book.read;

        // DOM Text Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        remove.textContent = "Delete";

        if (read.value == "true")
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


// Button Event Listeners
document.addEventListener('click', (e) => {
    // Form selectors
    const bookContainer = document.querySelector('.books');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('.read-btn').value;

    // Event listener for remove buttons
    if (e.target.classList.contains('remove')) {
        removeBookFromLibrary(e.target.getAttribute('data-id'));
        bookContainer.innerHTML = "";
        displayLibrary(myLibrary);
        // console.table(myLibrary);
    }
    // Event listener for read / not read buttons
    else if (e.target.classList.contains('readBook')) {
        toggleRead(e.target);
    }
    // Event Listener for read / not read input
    else if (e.target.classList.contains('read-btn')) {
        toggleRead(e.target);
    }

    else if (e.target.classList.contains('add-book')) {
        const newBook = new Book(title, author, pages, read);
        if (title && author && pages) {
            bookContainer.innerHTML = "";
            addBookToLibrary(newBook);
            displayLibrary(myLibrary);
        }
    }
})









