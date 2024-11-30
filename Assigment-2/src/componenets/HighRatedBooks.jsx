import React from "react";
import BookCard from "./BookCard";
import { Books } from "../data/books";

const HighRatedBooks = () => {
  const highRated = Books.filter((book) => book.rating > 4.5);

  return (
    <div>
      <h2>High Rated Books</h2>
      {highRated.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default HighRatedBooks;
