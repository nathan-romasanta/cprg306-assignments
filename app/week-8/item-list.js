"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedData =
    sortBy === "name"
      ? [...items].sort((a, b) => a.name.localeCompare(b.name))
      : [...items].sort((a, b) => a.category.localeCompare(b.category));

  function handleClick(item) {
    onItemSelect(item);
  }

  return (
    <main>
      <div>
        <nav className="p-5 flex flex-row">
          <h1 className="text-2xl py-4">Sort by</h1>
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
            <li key={index}>
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => handleClick(item.name)}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
