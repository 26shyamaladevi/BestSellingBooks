import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "The Perfumist of Paris";
  const author = "Alka Joshi";
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/41+8V0xg+wL._AC_SX368_.jpg'
        alt='The Perfumist of Paris'
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
