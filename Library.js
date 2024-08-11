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

    borrowBook(isbn) {
        const book = this.books.get(isbn);
        if (!book) {
            throw new Error('Book not found.');
        }
        if (!book.available) {
            throw new Error('Book is not available.');
        }
        book.available = false;
    }
    
    returnBook(isbn) {
        const book = this.books.get(isbn);
        if (!book) {
            throw new Error('Book not found.');
        }
        if (book.available) {
            throw new Error('Book was not borrowed.');
        }
        book.available = true;
    }

    viewAvailableBooks(){
        return Array.from(this.books.values()).filter(book => book.available);
    }
}
module.exports = Library;