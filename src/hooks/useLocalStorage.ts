import { useState } from "react";

type Item = {
  name: string;
  url: string;
};

export function useLocalStorage(
  key: string,
  initialValue: Item[]
): [Item[], (value: Item[]) => void, (index: number) => void] {
  const [storedValue, setStoredValue] = useState<Item[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: Item[]) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = (index: number) => {
    try {
      const newValue = storedValue.filter((_, i) => i !== index);
      setStoredValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
}
