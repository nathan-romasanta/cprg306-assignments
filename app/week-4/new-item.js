"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);

  const decrement = () => setQuantity(quantity - 1);

  return (
    <div class="flex justify-center items-center flex-row gap-4 m-4 w-full">
      <div class=" bg-blue-100 p-6 rounded-lg flex flex-row items-center gap-2">
        <p class="text-gray-700 px-10">{quantity}</p>
        <button
          className={`px-6 py-3 font-bold text-white rounded-lg transition duration-300 ease-in-out  ${
            quantity === 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          }`}
          disabled={quantity === 20}
          onClick={increment} // Disable if quantity is 0
        >
          +
        </button>
        <button
          className={`px-6 py-3 font-bold text-white rounded-lg transition duration-300 ease-in-out  ${
            quantity === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          }`}
          disabled={quantity === 0}
          onClick={decrement} // Disable if quantity is 0
        >
          -
        </button>
      </div>
    </div>
  );
}
