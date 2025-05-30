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

    printBookDetails(): string {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
}

const book1 = new Books('The Shining', 'Stephen King', 1977);

console.log(book1.printBookDetails());