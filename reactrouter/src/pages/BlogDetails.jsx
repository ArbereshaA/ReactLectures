import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog ID: {id}</h2>
      <p>Here is the content for blog post #{id}...</p>
    </div>
  );
}

export default BlogDetails;
