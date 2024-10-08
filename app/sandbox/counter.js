"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const getValues = (event) => {
    console.log(event.target.value);
  };
  const submitFunction = (event) => {
    event.preventDefault();
    getValues();
    // Handle form data
  };
  return (
    <form action="/submit" method="post" onSubmit={submitFunction}>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Submit</button>
      <input type="text" onChange={getValues} />
    </form>
  );
}

// In JSX
