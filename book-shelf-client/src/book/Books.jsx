/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slice/bookSlice";
import Book from "./Book";

function Books() {
  const data = useSelector((state) => state.book);
  const dispatch = useDispatch();
  // console.log("state = ", data);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>Books Self</h1>
        {data.isLoading && <h1>Lodding.............</h1>}

        {!data.isLoading && data.error ? (
          <h1>Error......{data.error} </h1>
        ) : null}
      </div>

      {!data.isLoading && data.books.length ? (
        <div className="row p-2 mx-auto gap-2 mx-auto justify-content-center">
          {data.books &&
            data.books.map((book) => <Book key={book.id} book={book}></Book>)}
        </div>
      ) : null}
    </>
  );
}

export default Books;
