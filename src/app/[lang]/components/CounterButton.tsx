"use client";
import React, { FC } from "react";

const CounterButton: FC<{
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}> = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
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
