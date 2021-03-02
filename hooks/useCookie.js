import { useState } from 'react';

const getItem = (key) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=');
    const storedKey = item[0];
    const storedValue = item[1];

    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');

const setItem = (key, value, dateExpired) => {
  const now = new Date(dateExpired);
  console.log(now, dateExpired);
  console.log(dateExpired ? `${key}=${value}; expires=${now.toUTCString()}; path=/;` : `${key}=${value}; `);
  document.cookie = dateExpired ? `${key}=${value}; expires=${now.toUTCString()}; path=/;` : `${key}=${value}; `;
};

const useCookie = (key, defaultValue) => {
  const [cookie, setCookie] = useState(
    typeof window === 'undefined' ? defaultValue : () => getItem(key) || defaultValue
  );

  const updateCookie = (value, dateExpired) => {
    setCookie(value);
    setItem(key, value, dateExpired);
  };

  return [cookie, updateCookie];
};

export default useCookie;
