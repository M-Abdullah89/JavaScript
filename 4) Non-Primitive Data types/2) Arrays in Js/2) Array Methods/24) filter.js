//? creates a new array filled with elements that pass a test provided by a function.
const arr = [10, 18, 20, 3, 40, 50];

const result = arr.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log(result);

// ? does not change the original array.
console.log(arr);


//! for example:


function filterByAuthor(books, author) {
    return books.filter(function (book) {
        return book.author === author;
    });
}

// Example usage:
const books = [
    { title: "Book One", author: "Author A" },
    { title: "Book Two", author: "Author B" },
    { title: "Book Three", author: "Author A" },
    { title: "Book Four", author: "Author C" },
];

const authorBooks = filterByAuthor(books, "Author A");
console.log(authorBooks);
