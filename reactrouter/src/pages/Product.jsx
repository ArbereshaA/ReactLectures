/*
 Assignment:
1. Create a Product component that takes props: `productName` and `price`.
2. Display them in this format: "Product: [productName] - Price: $[price]".
3. Render 2 different products in App.jsx.
*/

function Product(props) {
  return (
    <p>
      Product: {props.productName} - Price: ${props.price}
    </p>
  );
}

export default Product;
