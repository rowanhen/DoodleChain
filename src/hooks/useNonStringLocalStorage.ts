import { useCallback, useState } from "react";

export const useLocalStorageNonString = <T>(
  key: string,
  initialState: T
): [T, (newValue: T | undefined) => void] => {
  const serializedInitialState = JSON.stringify(initialState);
  let storageValue: T = initialState;

  try {
    const item = localStorage.getItem(key);
    if (item !== null) {
      storageValue = JSON.parse(item) ?? initialState;
    }
  } catch {
    localStorage.setItem(key, serializedInitialState);
  }

  const [value, setValue] = useState<T>(storageValue);

  const updatedSetValue = useCallback(
    (newValue: T | undefined) => {
      const serializedNewValue = JSON.stringify(newValue);
      if (
        serializedNewValue === serializedInitialState ||
        typeof newValue === "undefined"
      ) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, serializedNewValue);
      }
      setValue(newValue ?? initialState);
    },
    [initialState, serializedInitialState, key]
  );

  return [value, updatedSetValue];
};
