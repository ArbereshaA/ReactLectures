import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product ID: {id}</h2>
      <p>This is the detail page for product #{id}</p>
      <button onClick={() => navigate(-1)}>Back to Product List</button>
    </div>
  );
}

export default ProductDetails;
