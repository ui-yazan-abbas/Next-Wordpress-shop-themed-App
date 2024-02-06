"use client";
import { useState } from "react";

export const useSessionStorage = <T,>(key: string, initialValue?: T) => {
  return useStorage<T>(sessionStorage, key, initialValue);
};

const useStorage = <T,>(storage: Storage, key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (!storage) return initialValue;

    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value: T) => {
    try {
      setStoredValue(value);

      if (!storage) return;

      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};
