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

const theHobbit = new Book('the hobbit', 'jrr', '295', true);
const theHobbit2 = new Book('the hobbit2', 'jrr', '295', false);

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);

function displayLibrary() {

}

console.log(myLibrary);



