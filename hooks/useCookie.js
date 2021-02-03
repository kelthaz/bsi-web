import { useState } from 'react';

const getItem = (key) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=');
    const storedKey = item[0];
    const storedValue = item[1];

    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');

const setItem = (key, value, numberOfDays, dateExpired) => {
  const now = new Date();

  now.setTime(dateExpired || now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);

  document.cookie = !(numberOfDays && dateExpired)
    ? `${key}=${value}; `
    : `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

const useCookie = (key, defaultValue) => {
  const [cookie, setCookie] = useState(
    typeof window === 'undefined' ? defaultValue : () => getItem(key) || defaultValue
  );

  const updateCookie = (value, numberOfDays, dateExpired) => {
    setCookie(value);
    setItem(key, value, numberOfDays, dateExpired);
  };

  return [cookie, updateCookie];
};

export default useCookie;
