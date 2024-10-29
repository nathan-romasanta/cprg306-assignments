"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "../week-7/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div className="bg-[#020617] min-h-screen">
      <main>
        <h1 className="text-4xl font-bold p-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}></NewItem>
        <ItemList items={items}></ItemList>
      </main>
    </div>
  );
}
