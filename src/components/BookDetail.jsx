function BookDetail({ book }) {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}
    >
      <h2>{book.title}</h2>
      <p>
        <strong>Autori:</strong> {book.author}
      </p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
