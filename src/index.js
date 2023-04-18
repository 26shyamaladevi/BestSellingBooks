import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41+8V0xg+wL._AC_SX368_.jpg",
    title: "The Perfumist of Paris",
    author: "Alka Joshi",
    id: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/41SNcMGE2GL._SY346_.jpg",
    title: "Out of the Ashes: A Novel",
    author: "Kara Thomas",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  //destructure
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
