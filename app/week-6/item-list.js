"use client";

import { useState } from "react";

import items from "../week-6/items.json";
import Item from "./item";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedData =
    sortBy === "name"
      ? [...items].sort((a, b) => a.name.localeCompare(b.name))
      : [...items].sort((a, b) => a.category.localeCompare(b.category));

  function handleClick(index) {
    const item = {
      name: sortedData[index].name,
      quantity: sortedData[index].quantity,
      category: sortedData[index].category,
    };
    console.log(item);
    alert(
      `You clicked on ${sortedData[index].name} ${sortedData[index].quantity} ${sortedData[index].category}`
    );
  }
  return (
    <main>
      <div>
        <nav className="p-5   flex flex-row">
          <h1 className="text-2xl text- py-4">Sort by</h1>
          <button
            onClick={() => setSortBy("name")}
            className="text-white px-6 py-3 font-bold rounded-lg transition duration-300 ease-in-out mx-2 bg-blue-500"
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className="text-white px-6 py-3 font-bold rounded-lg transition duration-300 ease-in-out mx-2 bg-blue-500"
          >
            Category
          </button>
        </nav>
        <ul>
          {sortedData.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
