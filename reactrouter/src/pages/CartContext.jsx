// Create a Context called CartContext.

// Provide a cart state (items and addItem) using CartContext.Provider.

// Use useContext in two components:

// AddToCartButton → lets us add items.

// CartStatus → shows how many items are in the cart.

// Wrap everything inside the CartProvider in App.js.

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(0);

  const addItem = () => setItems(items + 1);

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
