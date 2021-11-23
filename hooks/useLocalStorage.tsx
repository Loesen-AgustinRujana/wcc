import { useState } from 'react';

export const useLocalStorage = (key: any, initialValue: any) => { //CheckLater
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (process.browser) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  return [storedValue, setStoredValue];
};
