const Library = require('./Library');

describe('Library Management System',()=>{
    let library;

    beforeEach(()=>{
        library = new Library();
    });

    test('should add a book',()=>{
        library.addBook('12345','The Alchemist','Paulo Coelho','1998');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([{title: 'The Alchemist',author: 'Paulo Coelho',publicationYear:1998,available:true}]); 
    });
});