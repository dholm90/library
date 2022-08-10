class counter {
    constructor() {
        this.count = 0;
    }
    add() {
        return this.count++;
    }
    reset() {
        return this.count = 0;
    }
}

class displayController {
    constructor() {
        this.counter = new counter();
        this.book = new Book();
    }

    createBook(book) {
        // DOM Element initialize
        const bookContainer = document.querySelector('.books');
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('button');
        const remove = document.createElement('button');

        // Counter logic
        remove.setAttribute('data-id', this.counter.count);
        read.setAttribute('data-id', this.counter.count);
        this.counter.add();

        // Add classes to elements
        remove.classList.add('remove');
        read.classList.add('readBook');
        bookCard.classList.add('book');

        read.value = book.isRead;

        // DOM Text Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        remove.textContent = "Delete";

        // Set read or not read
        if (read.value == "true") {
            read.textContent = "Read"

        }

        else {
            read.textContent = "Not Read"
            read.classList.add('notRead');
        }

        // Append DOM elements
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(remove);
        bookContainer.appendChild(bookCard);
    }

    render() {
        const bookContainer = document.querySelector('.books');
        const books = document.querySelectorAll('.book');
        let isRead = document.querySelector('.read-btn');
        books.forEach(book => bookContainer.removeChild(book));

        for (let i = 0; i < library.books.length; i++) {
            this.createBook(library.books[i]);
        }

        this.counter.reset();

    }

    getNewBook() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isRead = document.getElementById('read-btn').value;
        return new Book(title, author, pages, isRead);
    }

    events() {
        document.addEventListener('click', (e) => {
            // Form selectors
            const bookContainer = document.querySelector('.books');
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages').value;
            const read = document.querySelector('.read-btn').value;


            // Event listener for remove buttons
            if (e.target.classList.contains('remove')) {
                library.removeBook(e.target.getAttribute('data-id'));
            }
            // Event listener for read / not read buttons
            else if (e.target.classList.contains('readBook')) {
                library.setIsRead(e.target.getAttribute('data-id'));
            }
            // Event Listener for read / not read input
            else if (e.target.classList.contains('read-btn')) {

                let isRead = document.getElementById('read-btn');
                console.log(isRead.value);

                document.getElementById('read-btn').value = isRead.value;
                if (isRead.value != 'true') {
                    isRead.textContent = "Read"
                    isRead.classList.remove('notRead');
                    isRead.value = 'true';
                }

                else {
                    isRead.textContent = "Not Read"
                    isRead.classList.add('notRead');
                    isRead.value = 'false';
                }
                console.log(isRead.value)
            }

            else if (e.target.classList.contains('add-book')) {
                const title = document.getElementById('title').value;
                const author = document.getElementById('author').value;
                const pages = document.getElementById('pages').value;
                const isRead = document.getElementById('read-btn').value;
                if (title && author && pages)
                    library.addBook(new Book(title, author, pages, isRead))
            }
        })
    }
}

class Library {
    constructor() {
        this.books = [];
        this.display = new displayController();
    }
    addBook(newBook) {
        this.books.push(newBook);
        this.display.render();
    }
    removeBook(index) {
        this.books.splice(index, 1);
        this.display.render();
    }
    getBook(index) {
        return this.books[index];
    }
    setIsRead(index) {
        let read = this.books[index].isRead;
        read = !read;
        this.books[index].isRead = read;
        this.display.render();
    }
}
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }


}

const library = new Library();
let book1 = new Book('book1', 'adf', 325, true);
let book2 = new Book('book2', 'adf', 325, false);
library.addBook(book1);
library.addBook(book2);
library.display.events();



