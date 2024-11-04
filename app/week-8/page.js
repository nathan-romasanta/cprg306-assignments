"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "../week-7/items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    const cleanedName = selectedItem
      .split(",")[0]
      .split(" ")
      .slice(0, 2)
      .map((word) => word.replace(/[^\w\s]/g, ""))
      .join(" ")
      .trim();

    setSelectedItemName(cleanedName);
  };
  return (
    <div className="bg-[#020617] min-h-screen">
      <main className="flex p-5 space-x-4">
        {}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold p-2">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {}
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} /> {}
        </div>
      </main>
    </div>
  );
}
