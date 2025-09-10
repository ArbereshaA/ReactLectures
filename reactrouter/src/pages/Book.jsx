/*
 Assignment:
1. Create a Book component that accepts props: `title`, `author`, and `year`.
2. Display them in the format: "[title] by [author] (Published in [year])".
3. Render at least 2 books in App.jsx.
*/

function Book(props) {
  return (
    <p>
      "{props.title}" by {props.author} (Published in {props.year})
    </p>
  );
}

export default Book;
