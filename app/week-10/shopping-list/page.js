"use client";

import React, { useEffect, useState } from "react";
import {
  getUserItems,
  addItemToUser,
} from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { AuthContextProvider, useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const loadItems = async () => {
    try {
      const userItems = await getUserItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      // Add item to Firestore and get the document ID
      const itemId = await addItemToUser(user.uid, newItem);

      // Set the ID of the new item and update state
      const itemWithId = { id: itemId, ...newItem };
      setItems([...items, itemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  useEffect(() => {
    loadItems(user.uid);
  });

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
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}
