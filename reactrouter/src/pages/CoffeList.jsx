import React from "react";
import CoffeeItem from "./CoffeItem";

export default function CoffeeList({ coffees, onAddToOrder }) {
  return (
    <div>
      <h2>Menu</h2>
      {coffees.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          name={coffee.name}
          price={coffee.price}
          onAdd={() => onAddToOrder(coffee)} // Passing function as prop
        />
      ))}
    </div>
  );
}
