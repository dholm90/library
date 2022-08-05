let myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
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

    const dataID = parseInt(target.getAttribute('data-id'));
    const readValue = target.getAttribute('value');


    const newLibrary = myLibrary.map(object => {
        if (object.id === parseInt(dataID)) {
            return { ...object, read: readValue };

        }
        return object;
    })
    // myLibrary = newLibrary.slice(0);
    // console.table(newLibrary);
    // myLibrary.splice(0, myLibrary.length, ...newLibrary);
    // myLibrary = newLibrary;


    // const index = myLibrary.map(book => book.read).indexOf(dataID);
    // console.log(index);
    console.log(readValue)
    if (readValue !== "true") {

        target.setAttribute('value', 'true');
        target.textContent = "Read";
        target.classList.remove('notRead');
        // console.table(newLibrary)
        // myLibrary = newLibrary.slice(0);



    }
    else {
        target.setAttribute('value', 'false')
        target.textContent = "Not Read";
        target.classList.add("notRead");
        // console.table(newLibrary)
        // myLibrary = newLibrary.slice(0);
        // myLibrary.splice(0, myLibrary.length, ...newLibrary);
    }
    console.table(myLibrary);

    console.table(newLibrary);

}

const theHobbit = new Book(0, 'the hobbit', 'jrr', '295', true);
const theHobbit2 = new Book(1, 'the hobbit2', 'jrr', '295', false);

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
        read.setAttribute('data-id', counter);
        book.id = counter;
        counter += 1;

        // Add classes to elements
        remove.classList.add('remove');
        read.classList.add('readBook');
        bookCard.classList.add('book');

        // Set read value to book object read value
        read.value = book.read;

        // DOM Text Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        remove.textContent = "Delete";

        if (read.value == "true") {
            read.textContent = "Read"
            book.read = read.value;
        }

        else {
            read.textContent = "Not Read"
            read.classList.add('notRead');
            book.read = read.value;

        }


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
        bookContainer.innerHTML = "";
        toggleRead(e.target);
        displayLibrary(myLibrary);
    }

    else if (e.target.classList.contains('add-book')) {
        let id = 0;
        const newBook = new Book(id, title, author, pages, read);
        if (title && author && pages) {
            bookContainer.innerHTML = "";
            addBookToLibrary(newBook);
            displayLibrary(myLibrary);
        }
    }
})









