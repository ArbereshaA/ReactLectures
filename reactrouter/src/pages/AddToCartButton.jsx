import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function AddToCartButton() {
  const { addItem } = useContext(CartContext);
  return <button onClick={addItem}>Add Item</button>;
}
