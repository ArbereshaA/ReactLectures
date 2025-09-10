import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartStatus() {
  const { items } = useContext(CartContext);
  return <h2>Cart: {items} items</h2>;
}
