import { useState } from "react";

const products = [
  { id: 1, name: "T-shirt", price: 15 },
  { id: 2, name: "Sneakers", price: 60 },
  { id: 3, name: "Cap", price: 10 },
];

function ProductList() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }
  //console.log(handleClick, clickCount);

  return (
    <div>
      <h2>Products</h2>
      <p>Products clicked: {clickCount}</p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={handleClick}>Click</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
