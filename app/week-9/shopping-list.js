// week-9/shopping-list/page.js
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation
import { useUserAuth } from "../_utils/auth-context"; // Adjust path as necessary

export default function ShoppingList() {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shopping List</h1>
    </div>
  );
}
