import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header";
import Title from "./Title";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <Header></Header>
      <h1>
        <Title />
      </h1>
      <section className='bookList'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
