import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export const setCookie = (name: string, value: any, options: any) => { //CheckLater
  if (!isBrowser) return;

  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();

  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    optionsWithDefaults.path;
};

export const getCookie = (name: string, initialValue = '') => {
  return (
    (isBrowser &&
      document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, '')) ||
    initialValue
  );
};

export default function UseCookie(key: string, initialValue: string) {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue);
  });

  const updateItem = (value: any, options: any) => { //CheckLater
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
}
