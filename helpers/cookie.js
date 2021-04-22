export const getCookie = (key) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=');
    const storedKey = item[0];
    const storedValue = item[1];

    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');

export const setCookie = (key, value, dateExpired) => {
  const cookie = dateExpired
    ? `${key}=${value}; expires=${new Date(dateExpired).toUTCString()}; path=/;`
    : `${key}=${value}; `;
  document.cookie = cookie;
};
