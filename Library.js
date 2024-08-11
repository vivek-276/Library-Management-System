class Library {
    constructor() {
        this.books = new Map();
    }
    addBook(isbn, title, author, publicationYear) {
        if (this.books.has(isbn)) {
            throw new Error('Book with this ISBN already exists.');
        }
        this.books.set(isbn, { title, author, publicationYear, available: true });
    }

    viewAvailableBooks(){
        return Array.from(this.books.values()).filter(book => book.available);
    }
}
module.exports = Library;