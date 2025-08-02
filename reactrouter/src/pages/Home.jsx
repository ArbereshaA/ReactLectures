import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/students")}>Go to Students</button>
      <button onClick={() => navigate("/products")}>Go to Products</button>
      <button onClick={() => navigate("/blogs")}>Go to Blogs</button>
    </div>
  );
}
export default Home;
