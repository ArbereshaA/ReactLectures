import BookItem from "./BookItem";

function BookList({ books, onSelectBook }) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onSelect={onSelectBook} />
      ))}
    </div>
  );
}

export default BookList;
