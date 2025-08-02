import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const products = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Phone" },
    { id: 3, title: "Tablet" },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <button key={p.id} onClick={() => navigate(`/products/${p.id}`)}>
          View {p.title}
        </button>
      ))}
    </div>
  );
}

export default ProductList;
