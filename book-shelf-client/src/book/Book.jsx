/* eslint-disable react/style-prop-object */
import React from "react";

function Book({ book }) {
  //   const { id, title, author, publication, price, thumbnail, isFavourite } =
  //     book;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 card p-3">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={book.thumbnail}
          style={{ width: "144px", backgroundColor: "rgba(255, 0, 0, 0.1)" }}
          alt={book.taile}
        />
      </div>

      <div className="">
        <h5 className=""> {book.title} </h5>
        <p className="">
         By: {book.author}
        </p>
        <p className="">${book.price}</p>
        <button type="button" className="btn btn-primary btn-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Book;
