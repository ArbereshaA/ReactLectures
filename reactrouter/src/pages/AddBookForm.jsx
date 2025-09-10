import { useContext, useState } from "react";
import { BooksContext } from "./BooksContext";

export default function AddBookForm() {
  const { addBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        placeholder="Enter book title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => addBook(title)}>Add Book</button>
    </div>
  );
}
