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

});