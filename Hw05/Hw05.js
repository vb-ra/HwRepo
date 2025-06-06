/*
Exercise: Books
Create a script that allows to model books with the following information:
    Title: title of the book.
    Author: author of the book.
    Year Published: The year the book was published.
I should be able to ask the script to print the book details in the format: "{Title} by {Author}, published in {Year}."
I should be able to ask the script if the book is considered a classic (published more than 50 years ago).
Notes:
    Interpret all this as a class with properties and methods.
    There is no need to implement a command line interface.
*/
var Books = /** @class */ (function () {
    function Books(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    Books.prototype.isClassic = function () {
        var currentYear = new Date().getFullYear();
        var classicResult = (currentYear - this.yearPublished >= 50) ? "- *Classic" : "- Not a Classic";
        return classicResult;
    };
    Books.prototype.printBookDetails = function () {
        return "\n        ".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.yearPublished);
    };
    return Books;
}());
var book1 = new Books('Sin Familia', 'Hector Malot', 1878);
var book2 = new Books('How Music Works', 'David Byrne', 2012);
var book3 = new Books('Ready Player One', 'Ernest Cline', 2011);
var book4 = new Books('Adventures of Huckleberry Finn', 'Mark Twain', 1885);
var book5 = new Books('After Dark', 'Haruki Murakami', 2004);
console.log(book1.printBookDetails(), book1.isClassic(), book2.printBookDetails(), book2.isClassic(), book3.printBookDetails(), book3.isClassic(), book4.printBookDetails(), book4.isClassic(), book5.printBookDetails(), book5.isClassic());
