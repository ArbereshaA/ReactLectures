import { useNavigate } from "react-router-dom";

function BlogList() {
  const navigate = useNavigate();
  const posts = [
    { id: "1", title: "React Basics" },
    { id: "2", title: "useEffect Guide" },
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <button key={post.id} onClick={() => navigate(`/blogs/${post.id}`)}>
          Read "{post.title}"
        </button>
      ))}
    </div>
  );
}

export default BlogList;
