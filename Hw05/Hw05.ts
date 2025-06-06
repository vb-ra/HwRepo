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

class Books{
    title: string;
    author: string;
    yearPublished: number;

    constructor(title: string, author: string, yearPublished: number){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    isClassic(): string | undefined {
        const currentYear = new Date().getFullYear();
        const classicResult = (currentYear - this.yearPublished >= 50) ? `- *Classic` : `- Not a Classic`;
        return classicResult;
    }

    printBookDetails(): string | undefined{
        return `
        ${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
}

const book1 = new Books('Sin Familia', 'Hector Malot', 1878);
const book2 = new Books('How Music Works', 'David Byrne', 2012);
const book3 = new Books('Ready Player One', 'Ernest Cline', 2011);
const book4 = new Books('Adventures of Huckleberry Finn', 'Mark Twain', 1885);
const book5 = new Books('After Dark', 'Haruki Murakami', 2004);

console.log(
    book1.printBookDetails(),book1.isClassic(),
    book2.printBookDetails(),book2.isClassic(),
    book3.printBookDetails(),book3.isClassic(),
    book4.printBookDetails(),book4.isClassic(),
    book5.printBookDetails(),book5.isClassic(),
);