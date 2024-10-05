"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br></br>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
