function BookItem({ book, onSelect }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <strong>{book.title}</strong>
      <button onClick={() => onSelect(book)} style={{ marginLeft: "10px" }}>
        Shiko Detajet
      </button>
    </div>
  );
}

export default BookItem;
