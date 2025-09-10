import { useContext } from "react";
import { BooksContext } from "./BooksContext";

export default function BookList() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <h2>Favorite Books</h2>
      {books.length === 0 ? (
        <p>No books added</p>
      ) : (
        <ul>
          {books.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
