"use client";
import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-48 h-12 border border-black">
      <button className="w-12 h-full hover:text-red-500" onClick={decrement}>
        -
      </button>
      <div className="flex-1 flex items-center justify-center">{count}</div>
      <button className="w-12 h-full hover:text-red-500" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
