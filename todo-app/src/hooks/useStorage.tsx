import { useCallback, useEffect, useState } from "react";

const localStorageObject = window.localStorage;

const DEFAULT_LIST = [
  { id: 0, text: "task 1", checked: true },
  { id: 1, text: "task 2", checked: false },
];

export const useStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    const json = localStorageObject.getItem(key);
    if (json) return JSON.parse(json);
    return DEFAULT_LIST;
  });

  useEffect(() => {
    if (!value) return localStorageObject.removeItem(key);
    localStorageObject.setItem(key, JSON.stringify(value));
  }, [key, value, localStorageObject]);

  const removeValue = useCallback(() => {
    setValue(null);
  }, []);

  return [value, setValue, removeValue];
};
