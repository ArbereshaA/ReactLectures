import { createContext, useState } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    setBooks([...books, title]);
  };

  return (
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
  );
}

// BooksContext holds an array of favorite books.

// Function addBook(title) adds a book.

// BookList component shows all added books.

// AddBookForm has an input + button to add new books.

// Hint: Wrap the app in BooksProvider and use useContext to connect both
