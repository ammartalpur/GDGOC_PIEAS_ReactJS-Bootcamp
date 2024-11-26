import { Books } from "./books.mjs";

const printHigherThen45 = Books.filter((book) => book.rating > 4.5).forEach(
  (book) => {
    console.log(book.title);
  }
);

console.log("Books with rating higher than 4.5:");
printHigherThen45(Books);

const printFiction = Books.filter((book) => book.genre === "Fiction").forEach(
  (book) => {
    console.log(book.title);
  }
);

console.log("Fiction books:");
printFiction(Books);

const authors = Books.map((book) => book.author);

console.log("Authors:");
console.log(authors);

Books.forEach(({ title, author, rating, genre }) => {
  console.log(
    `Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`
  );
});
