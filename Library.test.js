const Library = require('./Library');

describe('Library Management System', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should add a book', () => {
        library.addBook('12345', 'The Alchemist', 'Paulo Coelho', '1998');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([{ title: 'The Alchemist', author: 'Paulo Coelho', publicationYear: 1998, available: true }]);
    });

    test('should throw error when adding a duplicate book', () => {
        library.addBook('1234567890', 'Book Title', 'Author Name', 2023);
        expect(() => {
            library.addBook('1234567890', 'Another Title', 'Another Author', 2024);
        }).toThrow('Book with this ISBN already exists.');
    });

    test('should borrow a book', () => {
        library.addBook('1234567890', 'Book Title', 'Author Name', 2023);
        library.borrowBook('1234567890');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([]);
    });

    test('should throw error when borrowing a book that is not available', () => {
        library.addBook('1234567890', 'Book Title', 'Author Name', 2023);
        library.borrowBook('1234567890');
        expect(() => {
            library.borrowBook('1234567890');
        }).toThrow('Book is not available.');
    });

    test('should return a borrowed book', () => {
        library.addBook('1234567890', 'Book Title', 'Author Name', 2023);
        library.borrowBook('1234567890');
        library.returnBook('1234567890');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([
            { title: 'Book Title', author: 'Author Name', publicationYear: 2023, available: true }
        ]);
    });

    test('should throw error when returning a book that was not borrowed', () => {
        library.addBook('1234567890', 'Book Title', 'Author Name', 2023);
        expect(() => {
            library.returnBook('1234567890');
        }).toThrow('Book was not borrowed.');
    });

    test('should throw error when borrowing a non-existent book', () => {
        expect(() => {
            library.borrowBook('1234567890');
        }).toThrow('Book not found.');
    });

    test('should throw error when returning a non-existent book', () => {
        expect(() => {
            library.returnBook('1234567890');
        }).toThrow('Book not found.');
    });
});
