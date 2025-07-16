import { useState } from "react";

const comments = [
  { id: "c1", author: "Anna", text: "Great article!" },
  { id: "c2", author: "Ben", text: "Thanks for the tips!" },
];

function CommentsSection() {
  const [showComments, setShowComments] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide" : "Show"}
      </button>

      {showComments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <strong>{comment.author}:</strong> {comment.text}
          </div>
        ))}
    </div>
  );
}
export default CommentsSection;
