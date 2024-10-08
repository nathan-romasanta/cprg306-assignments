"use client";

//Week 5 Assignment
import { useState } from "react";

export default function FormExample() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue.value);
    alert(`Form submitted with value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
