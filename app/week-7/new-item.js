"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: generateRandomString(),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);
    setQuantity(1);
    setCategory("Produce");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-start items-center flex-row gap-4 m-4 w-full ">
        <div className="bg-blue-100 p-6 flex flex-col rounded-lg gap-2 justify-center items-center">
          <h1 className="text-2xl text-black">New Item</h1>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="rounded-lg p-3 text-gray-500"
          />

          <div className="p-6 flex justify-center items-center bg-white rounded-lg h-auto w-auto">
            <p className="text-gray-700 px-4">{quantity}</p>
            <button
              type="button" // This ensures the button doesn't submit the form
              className={`px-6 py-3 font-bold text-white rounded-lg transition duration-300 ease-in-out mx-2 ${
                quantity === 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
              }`}
              disabled={quantity === 20}
              onClick={increment}
            >
              +
            </button>

            <button
              type="button" // This ensures the button doesn't submit the form
              className={`px-6 py-3 font-bold text-white rounded-lg transition duration-300 ease-in-out ${
                quantity === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
              }`}
              disabled={quantity === 0}
              onClick={decrement}
            >
              -
            </button>
          </div>

          <select
            required
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg p-3  text-gray-500 w-max"
          >
            <option value="Produce">Produce</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverage">Beverage</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="text-white px-6 py-3 font-bold rounded-lg transition duration-300 ease-in-out mx-2 bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
